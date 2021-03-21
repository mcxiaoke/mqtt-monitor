// mqtt client module
import Paho from "paho-mqtt";

function isValidURL(str) {
  // https://stackoverflow.com/questions/5717093
  //   var parser = document.createElement("a");
  //   parser.href = "http://example.com:3000/pathname/?search=test#hash";

  //   parser.protocol; // => "http:"
  //   parser.hostname; // => "example.com"
  //   parser.port; // => "3000"
  //   parser.pathname; // => "/pathname/"
  //   parser.search; // => "?search=test"
  //   parser.hash; // => "#hash"
  //   parser.host; // => "example.com:3000"
  var a = document.createElement("a");
  a.href = str;
  return a.host && a.host !== window.location.host;
}

const getClientId = () => {
  return (
    "web_monitor_" +
    Math.random()
      .toString(16)
      .substr(2, 8)
  );
};

const Client = (serverUrl, options, onConnected2, onDisconnected, onMessageReceived) => {
  const url = new URL(serverUrl);
  const client = new Paho.Client(url.host, url.port, getClientId());

  const onConnLost = () => {
    console.log("onConnLost:");
    onDisconnected && onDisconnected();
  };

  const onConnected = (reconn, url) => {
    onConnected2 && onConnected2();
  };

  const onMessage = (message) => {
    console.log("onMessage:" + message.payloadString);
    onMessageReceived && onMessageReceived(message);
  };

  client.onConnectionLost = onConnLost;
  client.onMessageArrived = onMessage;
  client.onConnected = onConnected;

  const connect = (callback) => {
    client.connect({
      onSuccess: (res) => {
        console.log("connect success");
        client.subscribe("monitor/#");
      },
      onFailure: (res) => {
        console.log("connect failure", res);
      },
      timeout: 5000,
      userName: "",
      password: "",
      willMessage: null,
      cleanSession: false,
      reconnect: true,
      mqttVersion: 4
    });
  };

  const disconnect = (callback) => {
    client.disconnect();
  };

  const reconnect = () => { };

  const subscribe = (topics, callback) => {
    client.subscribe(topics, {
      onSuccess: (res) => {
        console.log("subscribe success");
        client.subscribe("monitor/#");
      },
      onFailure: (res) => {
        console.log("subscribe failure", res);
      },
      qos: 0
      //   timeout: 3000
    });
  };

  const unsubscribe = (topics, callback) => {
    client.unsubscribe(topics, {
      onSuccess: (res) => {
        console.log("unsubscribe success");
        client.subscribe("monitor/#");
      },
      onFailure: (res) => {
        console.log("unsubscribe failure", res);
      },
      qos: 0
      //   timeout: 3000
    });
  };

  const publish = (topic, message, callback) => {
    client.publish(topic, message);
  };
};

export default Client;
