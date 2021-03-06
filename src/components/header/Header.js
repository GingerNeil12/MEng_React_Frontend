import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

class Header extends Component {

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const guestLinks = (
            <Navbar.Collapse id="toggle-navbar">
                <Nav>
                    <Nav.Link href="/about" style={LinkStyle}>About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/register" style={LinkStyle}>Register</Nav.Link>
                    <Nav.Link href="/login" style={LinkStyle}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        )

        const authLinks = (
            <Navbar.Collapse id="toggle-navbar">
                <Nav>
                    <Nav.Link href="/dashboard" style={LinkStyle}>Dashboard</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#" style={LinkStyle} onClick={this.onLogoutClick.bind(this)}>
                        <img
                            src={user.avatar}
                            alt={user.name}
                            style={AvatarStyle}
                            className="rounded-circle"
                            title="You must have a Gravatar connected email to display an avatar"
                        />
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        )

        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/" style={BrandStyle}>
                        Circles
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="toggle-navbar" />
                    <Navbar.Collapse id="toggle-navbar">
                        {isAuthenticated ? authLinks : guestLinks}
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
    fontWeight: "bold",
    fontSize: "1.4em"
}

const AvatarStyle = {
    width: "1.8em",
    marginRight: "5px"
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));
