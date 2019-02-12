import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

export default class RegisterSuccess extends Component {
    constructor(){
        super();

        this.state = {
            clicked: false
        }
    }

    render() {
        return (
            <Container>
                <div style={DivStyle}>
                    <h2 className="display-4">Register Success!</h2>
                    <p className="lead">You have registered successfully!</p>
                    <p>Click the button below to go to the Login page</p>
                    <Button variant="primary" bg="primary" size="lg" href="/login">Go To Login</Button>
                </div>
            </Container>
        )
    }
}

const DivStyle = {
    textAlign: "center",
    margin: "2em auto"
}