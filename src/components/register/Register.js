import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../css/layout/Register.css';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            validated: false,
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
        e.stopPropagation();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        // Redirect to login after successful result
        // Set the Forms to invalid if unsuccessful
        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(result => console.log(result.data))
            .catch(err => {
                this.setState({ errors: err.response.data });
                this.setState({ validated: false });
                console.log(this.state.errors);
            });
    }

    render() {
        const { validated, errors } = this.state;
        return (
            <div id="register-form">
                <h1 style={RegisterTitle}>Register</h1>
                <Form
                    id="register-form"
                    noValidate
                    style={FormStyle}
                    onSubmit={this.onSubmit}
                    validated={validated}>
                    <Form.Group id="name">
                        <Form.Control
                            size="lg"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChange}
                            isInvalid={errors.name} />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Control
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                            isInvalid={errors.email} />
                        <Form.Text className="text-muted">Use a Gravatar email for a custom Avatar</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control
                            size="lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            isInvalid={errors.password} />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group id="password2">
                        <Form.Control
                            size="lg"
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            isInvalid={errors.password2} />
                        <Form.Control.Feedback type="invalid">
                            {errors.password2}
                        </Form.Control.Feedback>
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
