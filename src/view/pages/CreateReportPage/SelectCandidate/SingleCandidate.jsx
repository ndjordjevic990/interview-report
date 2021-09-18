import React from "react";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const SingleCandidate = ({ candidate }) => {
  return (
    <Col xs={12} md={12} lg={6}>
      <Row className="border m-1">
        <Col xs={2} md={2} lg={2}>
          <Image className="w-100" src={candidate.avatar} />
        </Col>
        <Col xs={10} md={10} lg={10}>
          <p className="mb-0">{candidate.name}</p>
          <small className="text-muted">{candidate.email}</small>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleCandidate;