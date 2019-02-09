import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <Link style={BrandStyle} to="/">Circles</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="toggle-navbar"/>
                    <Navbar.Collapse id="toggle-navbar">
                            <Nav>
                                <Nav.Link href="#">
                                    <Link style={LinkStyle} to="#">About</Link>
                                </Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="#">
                                    <Link style={LinkStyle} to="/register">Register</Link>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <Link style={LinkStyle} to="/login">Login</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const BrandStyle = {
    color: "#ffffff",
    fontWeight: "bold",
    textDecoration: "none"
}

const LinkStyle = {
    color: "#ffffff",
    textDecoration: "none"
}
