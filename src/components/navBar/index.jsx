/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Row } from 'reactstrap';

function NavBar({ props }) {
  return (
    <Row>
      <Col md={3} className="d-flex justify-content-center">World of Warcraft</Col>
      <Col md={3} className="d-flex justify-content-center">Final Fantasy</Col>
      <Col md={3} className="d-flex justify-content-center">Dragon Quest</Col>
      <Col md={3} className="d-flex justify-content-center">Kingdom Hearts</Col>
    </Row>
  );
}

export default NavBar;
