import React, { Component } from "react";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(user);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <h1 style={pageTitle}>Login</h1>
                    <div style={formGroup}>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required={true}
                            onChange={this.onChange}
                            style={textboxStyle}
                        />
                    </div>
                    <div style={formGroup}>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required={true}
                            onChange={this.onChange}
                            style={textboxStyle}
                        />
                    </div>
                    <div style={formGroup}>
                        <input type="submit" value="Login" style={buttonStyle} />
                    </div>
                </form>
            </div>
        );
    }
}

// All the forms styling
const formStyle = {
    marginTop: "10px",
    padding: "10px",

    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden"
};

const pageTitle = {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "37px"
};

const formGroup = {
    margin: "10px"
};

const textboxStyle = {
    width: "100%",
    height: "30px",
    fontSize: "20px",
    padding: "4px"
};

const buttonStyle = {
    width: "100%",
    height: "30px",
    fontSize: "16px"
};
