import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';


class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            validated: false,
            success: false,
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

        this.props.registerUser(newUser);
    }

    render() {
        const { validated, errors, success } = this.state;
        const { user } = this.props.auth;

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
                {success && (
                    <Redirect to='/register-success'/>
                )}
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {registerUser})(Register);
