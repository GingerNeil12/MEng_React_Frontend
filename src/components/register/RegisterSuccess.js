import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default class RegisterSuccess extends Component {
    constructor(){
        super();

        this.state = {
            clicked: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({clicked: true});
    }

    render() {
        const {clicked} = this.state;

        return (
            <Container>
                <div style={DivStyle}>
                    <h2 className="display-4">Register Success!</h2>
                    <p className="lead">You have registered successfully!</p>
                    <p>Click the button below to go to the Login page</p>
                    <Button onClick={this.onClick} variant="primary" bg="primary" size="lg">Go To Login</Button>
                </div>
                {clicked && (
                    <Redirect to="/login"/>
                )}
            </Container>
        )
    }
}

const DivStyle = {
    textAlign: "center",
    margin: "2em auto"
}