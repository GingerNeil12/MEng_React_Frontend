import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)
    }

    render() {
        return (
            <div>
                <h1 style={LoginTitle}>Login</h1>
                <Form style={FormStyle} onSubmit={this.onSubmit}>
                    <Form.Group id="email">
                        <Form.Control
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control
                            size="lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            style={ButtonStyle}>Login</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const FormStyle = {
    width: "30%",
    margin: "2em auto"
}

const LoginTitle = {
    textAlign: "center",
    marginTop: "1em"
}

const ButtonStyle = {
    width: "100%"
}
