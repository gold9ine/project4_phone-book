import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg="2">
        <img
          className="profile"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        />
      </Col>
      <Col lg="10">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
