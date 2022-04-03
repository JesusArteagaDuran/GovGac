/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row } from 'reactstrap';
import NavBar from '../../components/navBar';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Home({ props }) {
  return (
    <>
      <Row>
        <Col>
          hola
          <i className="uil uil-search" />
        </Col>
      </Row>
      <Row className="homeContainer">
        <Col>
          <NavBar />
        </Col>
      </Row>
    </>

  );
}

export default Home;
