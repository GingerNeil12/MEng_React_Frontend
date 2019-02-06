import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <h1 style={pageTitle}>Register</h1>
                    <div style={formGroup}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required={true}
                            value={this.state.name}
                            onChange={this.onChange}
                            style={textboxStyle} />
                    </div>
                    <div style={formGroup}>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required={true}
                            value={this.state.email}
                            onChange={this.onChange}
                            style={textboxStyle} />
                    </div>
                    <div style={formGroup}>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required={true}
                            value={this.state.password}
                            onChange={this.onChange}
                            style={textboxStyle} />
                    </div>
                    <div style={formGroup}>
                        <input
                            name="password2"
                            type="password"
                            placeholder="Confirm Password"
                            required={true}
                            value={this.state.password2}
                            onChange={this.onChange}
                            style={textboxStyle} />
                    </div>
                    <div style={formGroup}>
                        <input
                            type="submit"
                            value="Register"
                            style={buttonStyle} />
                    </div>
                </form>
            </div>
        )
    }
}

// All the forms styling
const formStyle = {
    marginTop: '10px',
    padding: '10px',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden'
}

const pageTitle = {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '37px'
}

const formGroup = {
    margin: '10px'
}

const textboxStyle = {
    width: '100%',
    height: '30px',
    fontSize: '20px',
    padding: '4px'
}

const buttonStyle = {
    width: '100%',
    height: '30px',
    fontSize: '16px'
}

