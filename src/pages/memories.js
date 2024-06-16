import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceInfo from '../components/serviceInfo';
import '../css/service.css';

export const Memories = () => {
    return (
      <div className='body'>
      <Container className="service-container rubik-regular">
        <Row >
          <Col>
            <h1 style={{ fontSize: '70px', paddingLeft:"5%" }}>Memories</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          images
        </Row>
      </Container>
      </div>
    );
  }