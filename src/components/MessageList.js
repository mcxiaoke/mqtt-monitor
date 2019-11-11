import React, { useContext } from "react";
import Moment from "react-moment";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import AppContext from "../context/AppContext";

const CreatedAt = (ts) => {
  return ts ? (
    <small>
      <Moment format="YYYY/MM/DD HH:mm:ss">{ts}</Moment>{" "}
    </small>
  ) : null;
};

const NewBadge = (index) => {
  return index === 0 ? (
    <Badge pill variant="danger">
      New!
    </Badge>
  ) : null;
};

const MessageItem = ({ item, index, length }) => {
  return (
    <ListGroup.Item>
      <Media>
        <Media.Body>
          <strong className="text-primary">{item.topic}: </strong>
          <span className="text-secondary">{item.message}</span>
          <small className="pl-2">({length - index})</small>
          <span className="pl-2">
            <CreatedAt ts={item.ts} />
          </span>
          <span className="pl-2">
            <NewBadge index={index} />
          </span>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );
};

export default (props) => {
  const { messages } = useContext(AppContext);
  const listItems = messages.map((item, index) => (
    <React.Fragment key={"item_" + index}>
      <MessageItem item={item} index={index} length={messages.length} />
    </React.Fragment>
  ));
  return <ListGroup variant="flush">{listItems}</ListGroup>;
};
