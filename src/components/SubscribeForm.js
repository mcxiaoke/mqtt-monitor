import React, { useRef, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppContxt from "../context/AppContext";
import { TopicInfo } from "./widgets";

export default (props) => {
  const { isConnected, topics } = useContext(AppContxt);
  const topicInput1 = useRef(null);
  const topicInput2 = useRef(null);

  const handleClick1 = (e) => {
    const options = {
      subscribe: true,
      topics: topicInput1.current.value
    };
    console.log("SubscribeForm.handleClick1 ", options);
    options.topics && props.onSubscribeFormSubmit && props.onSubscribeFormSubmit(options);
    topicInput1.current.value = "";
  };

  const handleClick2 = (e) => {
    const options = {
      subscribe: false,
      topics: topicInput2.current.value
    };
    console.log("SubscribeForm.handleClick2 ", options);
    options.topics && props.onSubscribeFormSubmit && props.onSubscribeFormSubmit(options);
    topicInput2.current.value = "";
  };

  // Pressing the enter key triggers the click handler of the first type="submit" button
  // https://dzello.com/blog/2017/02/19/demystifying-enter-key-submission-for-react-forms/
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target === topicInput1.current) {
        handleClick1(null);
      } else if (e.target === topicInput2.current) {
        handleClick2(null);
      }
    }
  };

  const onTopicClick = (topic) => {
    console.log("onTopicClick", topic);
    topicInput2.current.value = topic;
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Row className="align-items-center">
          <Col as={Col} sm={6} md={3} className="mb-3 mt-3">
            <Form.Control
              onKeyUp={handleKeyUp}
              ref={topicInput1}
              name="subscribe-topics"
              type="text"
              placeholder="topic/test"
            />
          </Col>
          <Col sm={6} md={3}>
            <Button
              className="btn-block"
              name="subscribe"
              variant="primary"
              type="button"
              disabled={!isConnected}
              onClick={handleClick1}
            >
              Subscribe
            </Button>
          </Col>
          <Col sm={6} md={3} className="mb-3 mt-3">
            <Form.Control
              onKeyUp={handleKeyUp}
              ref={topicInput2}
              name="unsubscribe-topics"
              type="text"
              placeholder="topic/test"
            />
          </Col>
          <Col sm={6} md={3}>
            <Button
              className="btn-block"
              name="unsubscribe"
              variant="danger"
              type="button"
              disabled={!isConnected}
              onClick={handleClick2}
            >
              Unsubscibe
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <TopicInfo topics={topics} onTopicClick={onTopicClick} />
    </React.Fragment>
  );
};
