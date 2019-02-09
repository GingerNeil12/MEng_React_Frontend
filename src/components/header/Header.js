import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/" style={BrandStyle}>Circles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="toggle-navbar"/>
                    <Navbar.Collapse id="toggle-navbar">
                            <Nav>
                                <Nav.Link href="/about" style={LinkStyle}>About</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="/register" style={LinkStyle}>Register</Nav.Link>
                                <Nav.Link href="/login" style={LinkStyle}>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const LinkStyle = {
    color: "#ffffff",
    textDecoration: "none"
}

const BrandStyle = {
    fontWeight: "bold"
}
