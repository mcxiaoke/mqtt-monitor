import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PublishForm(props) {
  const topicInput = useRef(null);
  const messageInput = useRef(null);

  const handleSubmit = (e) => {
    console.log(props);
    e.preventDefault();
    const options = {
      topic: topicInput.current.value,
      message: messageInput.current.value,
      callback: (err) => {
        if (!err) {
          messageInput.current.value = "";
        }
      }
    };
    console.log("PublishForm.handleSubmit ", options);
    props.onPublishFormSubmit && props.onPublishFormSubmit(options);
  };

  return (
    <Form id="publish-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="publish-topic" xs={12} md={3}>
          <Form.Control ref={topicInput} name="publish-topic" type="text" placeholder="topic name" />
        </Form.Group>
        <Form.Group as={Col} controlId="publish-message" xs={12} md={7}>
          <Form.Control ref={messageInput} name="publish-message" type="text" placeholder="message content" />
        </Form.Group>
        <Col xs={12} md={2}>
          <Button className="btn-block" name="publish" variant="primary" type="submit" disabled={!props.isConnected}>
            Publish
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default PublishForm;

// https://zacjones.io/handle-multiple-inputs-in-react-with-hooks
// first approach, useState
// need: onChange= ()=>{setServer}
// use: user
//   const [server, setServer] = useState("");
//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");
// second approach, useRef
// need: ref={serverInput}
// use: serverInput.current.value
//   const serverInput = useRef(null);
//   const userInput = useRef(null);
//   const passInput = useRef(null);
// third approach
// use callback function
// need: onFormChange
// use: onFormChnage(e){ e.target.name, e.target.value }
// fourth approach
// use useReducer
// fix https://stackoverflow.com/questions/47012169/
//   let extraOpts = props.isConnected ? { disabled: "disabled" } : {};
