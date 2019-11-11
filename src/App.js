import React from "react";
import mqtt from "mqtt";
import store from "./utils/store";
import { isIterable, isString, toastInfo, toastError } from "./utils/utils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import AppContext from "./context/AppContext";
import MessageList from "./components/MessageList";
import HeaderActions from "./components/HeaderActions";

const MQTT_OPTIONS = {
  host: "ws://test.mosquitto.org:8080",
  username: null,
  password: null
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const options = store.storeGet("options") || MQTT_OPTIONS;
    const messages = (options && store.storeGet(options + "_messages")) || [];
    this.state = {
      isConnected: false,
      needReconnect: false,
      options: options,
      topics: new Set(),
      messages: messages
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Container>
          <Row className="justify-content-center">
            <h1 className="p-3" as={Col}>
              MQTT Monitor
            </h1>
          </Row>
          <Row>
            <HeaderActions
              onConnectFormSubmit={this.onConnectFormSubmit}
              onSubscribeFormSubmit={this.onSubscribeFormSubmit}
              onPublishFormSubmit={this.onPublishFormSubmit}
            />
          </Row>
          <Row>
            <Col className="mt-3">
              <h3>Received Messages</h3>
            </Col>
          </Row>
          <Row>
            <MessageList />
          </Row>
        </Container>
      </AppContext.Provider>
    );
  }

  onConnectFormSubmit = (options) => {
    console.log("onConnectFormSubmit ", options);
    if (this.state.isConnected) {
      this.client.end();
    } else {
      if (options && options.host) {
        this.connect(options);
        // this.setState({ options: options }, () => {
        //   this.checkConnect();
        // });
      }
    }
  };

  onSubscribeFormSubmit = (options) => {
    console.log("onSubscribeFormSubmit ", options);
    const { subscribe, topics } = options;
    if (this.state.isConnected && topics) {
      const theTopics = topics.split(" ");
      if (subscribe) {
        this.subscribe(theTopics);
      } else {
        this.unsubscribe(theTopics);
      }
    }
  };

  onPublishFormSubmit = (options) => {
    console.log("onPublishFormFormSubmit ", options);
    const { topic, message } = options;
    if (topic.includes("#") || topic.includes("*")) {
      toastError("Invalid Topics", "Can not publish to wildcard topics");
      return;
    }
    if (this.state.isConnected && topic && message) {
      this.publish(topic, message, options.callback);
    }
  };

  cleanTopics(inTopics) {
    let topics;
    if (isString(inTopics)) {
      topics = inTopics.split(" ");
    } else if (isIterable(inTopics)) {
      topics = inTopics;
    }
    return topics.map((it) => it.trim()).filter(Boolean);
  }

  publish(topic, message, callback) {
    console.log("publish", topic, message);
    this.client.publish(topic, message, (err) => {
      if (!err) {
        console.log("published:", topic, message);
        toastInfo("Message Sent", "message is sent to " + topic);
      } else {
        console.log("publish fail:", err);
      }
      callback && callback(err);
    });
  }

  unsubscribe(inTopics, callback) {
    const topics = this.cleanTopics(inTopics);
    console.log("unsubscribe to", topics);
    this.client.unsubscribe(topics, (err) => {
      if (!err) {
        console.log("unsubscribed to", topics);
        const newTopics = this.state.topics;
        topics.forEach((el) => {
          newTopics.delete(el);
        });
        this.setState({ topics: newTopics });
      } else {
        console.error("unsubscribe fail:", err);
      }
      callback && callback(err);
    });
  }

  subscribe(inTopics, callback) {
    const topics = this.cleanTopics(inTopics);
    console.log("subscribe to", topics);
    this.client.subscribe(topics, null, (err, granted) => {
      if (!err) {
        console.log("subscribed to", granted);
        this.setState({ topics: new Set([...topics, ...this.state.topics]) });
        toastInfo("Subscribe Success", "subscribed topics: " + topics);
      } else {
        console.error("subscribe fail:", err);
        toastError("Subscribe Failed", err);
      }
      callback && callback(err, granted);
    });
  }

  disconnect() {
    this.state.isConnected &&
      this.client.end(() => {
        console.log("disconnect end");
      });
  }

  connect(opts) {
    const connectOpts = { ...opts, reconnectPeriod: 0 };
    console.log("connecting with", connectOpts);
    this.client = mqtt.connect(opts.host, connectOpts);
    this.client.on("connect", () => {
      console.log("connected to", connectOpts.host);
      store.storeSet("options", connectOpts);
      this.setState({ isConnected: this.client.connected, options: connectOpts });
      toastInfo("MQTT Connected!", "server is " + connectOpts.host);
      this.subscribe("pump/# monitor/#", (err) => {
        if (!err) {
          const now = moment().format("YYYY/MM/DD HH:mm:ss");
          this.client.publish("monitor/log", `Monitor online at ${now}!`);
        }
      });
    });
    this.client.on("disconnect", () => {
      console.log("disconnect");
      this.setState({ isConnected: this.client.connected });
    });
    this.client.on("reconnect", () => {
      console.log("reconnect");
    });
    this.client.on("offline", () => {
      console.log("offline");
    });
    this.client.on("close", () => {
      console.log("close");
      this.setState({ isConnected: this.client.connected });
    });
    this.client.on("error", (err) => {
      console.log("Ooops", "Something is wrong!", err);
      this.setState({ isConnected: this.client.connected });
    });
    this.client.stream.on("error", (err) => {
      console.error("Connection error:", err);
      toastError("Connection Error!", "Failed to connect to " + connectOpts.host);
    });
    this.client.on("message", (topic, message) => {
    //   toastInfo("New Message", message.toString() + " (" + topic + ")");
      this.setState(
        {
          messages: [{ ts: new Date(), topic: topic, message: message.toString() }, ...this.state.messages]
        },
        () => {
          store.storeSet(this.state.options + "_messages", this.state.messages);
          console.log("total messages count: " + this.state.messages.length);
        }
      );
    });
  }

  checkConnect() {
    const options = this.state.options;
    options.host && options.host.startsWith("ws") && this.connect(options);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.options);
  }

  componentDidUpdate() {
    if (this.state.needReconnect) {
      this.checkConnect();
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    if (this.state.isConnected) {
      store.storeSet("options", this.state.options);
    }
    store.storeSet(this.state.options + "_messages", this.state.messages);
  }
}
