import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SubscribeForm(props) {
  const topicInput1 = useRef(null);
  const topicInput2 = useRef(null);

  const handleClick1 = (e) => {
    e.preventDefault();
    const options = {
      subscribe: true,
      topics: topicInput1.current.value
    };
    console.log("SubscribeForm.handleClick1 ", options);
    options.topics && props.onSubscribeFormSubmit && props.onSubscribeFormSubmit(options);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    const options = {
      subscribe: false,
      topics: topicInput2.current.value
    };
    console.log("SubscribeForm.handleClick2 ", options);
    options.topics && props.onSubscribeFormSubmit && props.onSubscribeFormSubmit(options);
  };

  const renderInfoBar = () => {
    const topics = (props.topics && [...props.topics].join(", ")) || "";
    return topics ? (
      <p className="m-0 p-0">
        <strong>Subscribed Topics: </strong>
        <span className="text-success">{topics}</span>
      </p>
    ) : null;
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Row className="align-items-center">
          <Col as={Col} sm={6} md={3} className="mb-3 mt-3">
            <Form.Control ref={topicInput1} name="subscribe-topics" type="text" placeholder="topic/test" />
          </Col>
          <Col sm={6} md={3}>
            <Button
              className="btn-block"
              name="subscribe"
              variant="primary"
              type="submit"
              disabled={!props.isConnected}
              onClick={handleClick1}
            >
              Subscribe
            </Button>
          </Col>
          <Col sm={6} md={3} className="mb-3 mt-3">
            <Form.Control ref={topicInput2} name="unsubscribe-topics" type="text" placeholder="topic/test" />
          </Col>
          <Col sm={6} md={3}>
            <Button
              className="btn-block"
              name="unsubscribe"
              variant="danger"
              type="submit"
              disabled={!props.isConnected}
              onClick={handleClick2}
            >
              Unsubscibe
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {renderInfoBar()}
    </React.Fragment>
  );
}

export default SubscribeForm;

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
