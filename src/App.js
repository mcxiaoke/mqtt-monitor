import React from "react";
import mqtt from "mqtt";
import Moment from "react-moment";
import store from "./utils/store";
import fake from "./utils/fake";
import { isIterable, isString } from "./utils/utils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import moment from "moment";
import { HeaderActionCards } from "./components/action_cards";

const DEFAULT_OPTIONS = {
  host: "ws://test.mosquitto.org:8080",
  username: null,
  password: null
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const options = store.storeGet("options") || DEFAULT_OPTIONS;
    const messages = (options && store.storeGet(options + "_messages")) || fake.messages || [];
    console.log("constructor", options, (messages && messages.length) || 0);
    this.state = {
      isConnected: false,
      options: options,
      topics: new Set(),
      messages: messages
    };
  }

  renderNewBadge = (index) => {
    return index === 0 ? (
      <Badge pill variant="danger">
        New!
      </Badge>
    ) : null;
  };

  renderCreatedAt = (ts) => {
    return ts ? (
      <small>
        <Moment format="YYYY/MM/DD HH:mm:ss">{ts}</Moment>{" "}
      </small>
    ) : null;
  };

  renderItems = () => {
    const items = this.state.messages;
    const listItems = items.map((item, index) => (
      <React.Fragment key={"item_" + index}>
        <ListGroup.Item>
          <Media>
            <Media.Body>
              <strong className="text-primary">{item.topic}: </strong>
              <span className="text-secondary">{item.message}</span>
              <small className="pl-2">({items.length - index})</small>
              <span className="pl-2">{this.renderCreatedAt(item.ts)}</span>
              <span className="pl-2">{this.renderNewBadge(index)}</span>
            </Media.Body>
          </Media>
        </ListGroup.Item>
      </React.Fragment>
    ));
    return <ListGroup variant="flush">{listItems}</ListGroup>;
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 className="p-3" as={Col}>MQTT Monitor</h1>
        </Row>
        <Row>
          <HeaderActionCards
            onConnectFormSubmit={this.onConnectFormSubmit}
            onSubscribeFormSubmit={this.onSubscribeFormSubmit}
            onPublishFormSubmit={this.onPublishFormSubmit}
            isConnected={this.state.isConnected}
            options={this.state.options}
            topics={this.state.topics}
          />
        </Row>
        {/* <Row></Row> */}
        <Row>
          <Col className="mt-3">
            <h3>Received Messages</h3>
          </Col>
        </Row>
        <Row>{this.renderItems()}</Row>
      </Container>
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

  publish(topic, message, callback = null) {
    console.log("publish ", topic, message);
    this.client.publish(topic, message, (err) => {
      if (!err) {
        console.log("published: ", topic, message);
      } else {
        console.log("publish fail: ", err);
      }
      callback && callback(err);
    });
  }

  unsubscribe(inTopics, callback = null) {
    const topics = this.cleanTopics(inTopics);
    console.log("unsubscribe current ", this.state.topics);
    console.log("unsubscribe target ", topics);
    this.client.unsubscribe(topics, (err) => {
      if (!err) {
        console.log("unsubscribed: ", topics);
        const newTopics = this.state.topics;
        topics.forEach((el) => {
          newTopics.delete(el);
        });
        this.setState({ topics: newTopics });
      } else {
        console.error("unsubscribe fail: ", err);
      }
      callback && callback(err);
    });
  }

  subscribe(inTopics, callback = null) {
    const topics = this.cleanTopics(inTopics);
    console.log("subscribe current ", this.state.topics);
    console.log("subscribe target ", topics);
    this.client.subscribe(topics, (err, granted) => {
      if (!err) {
        console.log("subscribed: ", granted);
        this.setState({ topics: new Set([...topics, ...this.state.topics]) });
      } else {
        console.error("subscribe fail: ", err);
      }
      callback && callback(err, granted);
    });
  }

  disconnect() {
    this.state.isConnected && this.client.end();
  }

  connect(opts) {
    console.log("connect with ", opts);
    this.client = mqtt.connect(opts.host, opts);
    this.client.on("connect", () => {
      console.log("connected");
      store.storeSet("options", opts);
      this.setState({ isConnected: this.client.connected, options: opts });
      this.subscribe("pump/# monitor/#", (err) => {
        if (!err) {
          const now = moment().format("YYYY/MM/DD HH:mm:ss");
          this.client.publish("monitor/log", `Hello, MQTT Monitor is online at ${now}!`);
        }
      });
    });
    this.client.on("disconnect", () => {
      console.log("disconnect");
      this.setState({ isConnected: this.client.connected });
    });
    this.client.on("close", () => {
      console.log("close");
      this.setState({ isConnected: this.client.connected });
    });
    this.client.on("error", (err) => {
      console.log("error:" + err);
      this.setState({ isConnected: this.client.connected });
    });
    this.client.on("message", (topic, message, packet) => {
      this.setState(
        {
          messages: [{ ts: new Date(), topic: topic, message: message.toString() }, ...this.state.messages]
        },
        () => {
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
    // this.checkConnect();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    if (this.state.isConnected) {
      store.storeSet("options", this.state.options);
    }
    store.storeSet(this.state.options + "_messages", this.state.messages);
  }
}

export default App;
