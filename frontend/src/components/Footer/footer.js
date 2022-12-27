import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f2f5fc" }}>
      <Container fluid>
        <Row className="footer-row">
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
                <p>1234 Street Name, City Name, United States</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
                <p>Phone: (123) 456-7890</p>
            </Col>
        </Row>
        <Row className="footer-row"> 
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
                <p>Email: asddsad@gmail.com
                    </p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
                <p>Website: www.welledigital.com</p>
            </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="text-center">
            <p>© 2021 - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};