import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceInfo from '../components/serviceInfo';
import '../css/service.css';

export const Service = () => {
  return (
    <div className='body'>
    <Container className="service-container rubik-regular">
      <Row >
        <Col>
          <h1 style={{ fontSize: '70px', paddingLeft:"5%" }}>Services</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <ServiceInfo date="Thursday, June 20th, 2024" title="Visitation" time="5:00 PM - 8:00 PM" locationName="Heights Funeral Home" locationAddress="1317 Heights Blvd Houston, TX 77008" />
        </Col>
        <Col xs={12} md={6}>
          <ServiceInfo date="Thursday, June 20th, 2024" title="Rosary" time="7:00 PM" locationName="Heights Funeral Home" locationAddress="1317 Heights Blvd Houston, TX 77008" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
        <ServiceInfo date="Friday, June 21st, 2024" title="Funeral Mass" time="11:00 AM" locationName="All Saints Catholic Church" locationAddress="215 E 10th St Houston, TX 77008" />
        </Col>
        <Col xs={12} md={6}>
        <ServiceInfo date="Friday, June 21st, 2024" title="Committal" time="1:00 PM" locationName="Houston National Cemetery" locationAddress="10410 Veterans Memorial Dr Houston, TX 77038" />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Service;
