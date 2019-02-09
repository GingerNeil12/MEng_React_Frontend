import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import '../../css/layout/Register.css';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        // axios goes here
        console.log(newUser);
    }

    render() {
        return (
            <div id="register-form">
                <h1 style={RegisterTitle}>Register</h1>
                <Form style={FormStyle} onSubmit={this.onSubmit} id="register-form">
                    <Form.Group id="name">
                        <Form.Control
                            size="lg"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChange} />
                    </Form.Group>
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
                    <Form.Group id="password2">
                        <Form.Control
                            size="lg"
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={this.state.password2}
                            onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group id="submit">
                        <Button
                            variant="primary"
                            type="submit"
                            style={ButtonStyle}>Register</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const RegisterTitle = {
    textAlign: "center",
    marginTop: "1em"
}
const FormStyle = {
    width: "45%",
    margin: "2em auto"
}
const ButtonStyle = {
    width: "100%"
}
