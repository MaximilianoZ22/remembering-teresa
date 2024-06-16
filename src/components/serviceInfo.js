import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import the icon from react-icons
import "../css/serviceInfo.css";

const ServiceInfo = ({ date, title, time, locationName, locationAddress }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;

  return (
    <Card className="service-info-card">
      <Card.Body>
        <Row className="mb-3 justify-content-center">
          <Col xs="auto">
            <div className="date">
              <Card.Text>{date}</Card.Text>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col xs="auto" className="text-center">
            <Card.Text><strong>{title}</strong></Card.Text>
            <Card.Text>{time}</Card.Text>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col xs="auto" className="text-center">
            <Card.Text><strong>{locationName}</strong></Card.Text>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center align-items-center">
          <Col xs="auto" className="text-center d-flex align-items-center">
            <FaMapMarkerAlt className="font-color-custom" /> {/* Use the imported icon */}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="ms-2 font-color-custom">
              <Card.Text className="font-color-custom">{locationAddress}</Card.Text>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ServiceInfo;
