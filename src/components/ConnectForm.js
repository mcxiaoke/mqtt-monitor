import React, { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppContxt from "../context/AppContext";

const ConnectButton = ({ isConnected }) => {
  return isConnected ? (
    <Button className="btn-block" variant="danger" type="submit">
      Disconnect
    </Button>
  ) : (
    <Button className="btn-block" variant="primary" type="submit">
      Connect
    </Button>
  );
};

export default (props) => {
  const ctx = useContext(AppContxt);
  const { isConnected } = ctx;
  const [options, setOptions] = useState(ctx.options);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions(Object.assign({}, options, { [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // empty username not equal to no username
    const fixedOptions = {
      host: options.host,
      username: options.username || null,
      password: options.password || null
    };
    // console.log("ConnectForm.handleSubmit ", fixedOptions);
    fixedOptions.host && props.onConnectFormSubmit && props.onConnectFormSubmit(fixedOptions);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} xs={12} md={4} lg={4}>
          <Form.Control
            disabled={isConnected}
            onChange={handleChange}
            name="host"
            type="text"
            value={options.host}
            placeholder="ws://test.mosquitto.org:8080"
          />
        </Form.Group>
        <Form.Group as={Col} xs={6} md={3} lg={3}>
          <Form.Control
            disabled={isConnected}
            onChange={handleChange}
            name="username"
            type="text"
            value={options.username}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group as={Col} xs={6} md={2} lg={3}>
          <Form.Control
            disabled={isConnected}
            onChange={handleChange}
            name="password"
            type="password"
            value={options.password}
            placeholder="Password"
          />
        </Form.Group>
        <Col xs={12} md={3} lg={2}>
          <ConnectButton isConnected={isConnected} />
        </Col>
      </Form.Row>
    </Form>
  );
};
