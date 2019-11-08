import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ConnectForm from "./form_connect";
import SubscribeForm from "./form_subscribe";
import PublishForm from "./form_publish";

// onFormSubmit={this.onFormSubmit}
// isConnected={this.state.isConnected}
// options={this.state.options}
// eslint-disable-next-line
function FormCard(props) {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} className="bg-dark" eventKey={props.index}>
        <span className="text-white">{props.title}</span>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.index}>
        <Card.Body>{props.children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

function HeaderActionCards(props) {
  return (
    <Accordion defaultActiveKey="0" className="w-100">
      {/* Connect Form Card */}
      <Card>
        <Accordion.Toggle as={Card.Header} className="bg-dark" eventKey="0">
          <span className="text-white"> Connect Options</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ConnectForm {...props} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* Subscribe Form Card */}
      <Card>
        <Accordion.Toggle as={Card.Header} className="bg-dark" eventKey="1">
          <span className="text-white"> Subscribe Options</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <SubscribeForm {...props} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* Publish Form Card */}
      <Card>
        <Accordion.Toggle as={Card.Header} className="bg-dark" eventKey="2">
          <span className="text-white"> Publish Options</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <PublishForm {...props} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export { HeaderActionCards };
