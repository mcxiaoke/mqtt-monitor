import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ConnectForm(props) {
  const [options, setOptions] = useState({
    host: props.options.host || "",
    username: props.options.username || "",
    password: props.options.password || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("handleChange ", name, value);
    const newOptions = Object.assign({}, options);

    newOptions[name] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit ", e.target);
    // empty username not equal to no username
    const fixedOptions = {
      host: options.host,
      username: options.username || null,
      password: options.password || null
    };
    console.log('ConnectForm.handleSubmit ',fixedOptions);
    props.onConnectFormSubmit && props.onConnectFormSubmit(fixedOptions);
  };

  const renderSubmit = () => {
    return props.isConnected ? (
      <Button className="btn-block" variant="danger" type="submit">
        Disconnect
      </Button>
    ) : (
      <Button className="btn-block" variant="primary" type="submit">
        Connect
      </Button>
    );
  };

  return (
    <Form id="connect-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="host" xs={12} md={4}>
          <Form.Control
            disabled={props.isConnected}
            onChange={handleChange}
            name="host"
            type="text"
            value={options.host}
            placeholder="ws://test.mosquitto.org:8080"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="username" xs={6} md={3}>
          <Form.Control
            disabled={props.isConnected}
            onChange={handleChange}
            name="username"
            type="text"
            value={options.username}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="password" xs={6} md={3}>
          <Form.Control
            disabled={props.isConnected}
            onChange={handleChange}
            name="password"
            type="password"
            value={options.password}
            placeholder="Password"
          />
        </Form.Group>
        <Col xs={12} md={2}>
          {renderSubmit()}
        </Col>
      </Form.Row>
    </Form>
  );
}

export default ConnectForm;
