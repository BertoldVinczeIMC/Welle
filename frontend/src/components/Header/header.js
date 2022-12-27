import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../../App.css'

export default function Header() {
    return (
        // create a bootstrp light navbar with brand on left, links on right, if collapsed open left side menu
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="menu">
            <Container fluid className="p-2" style={{width:"85%"}}>
                <Navbar.Brand href="#home" className="menu-brand">Welle Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className="menu-btn">Get Started</Nav.Link>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}