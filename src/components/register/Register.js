import React, { Component } from 'react'
import '../../css/register/register.css';

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

        console.log(newUser)
    }

    render() {
        return (
            <div>
                <form id="register-form" onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Name</label>
                        <input name="name" className="form-textbox" type="text" placeholder="Name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Email</label>
                        <input name="email" className="form-textbox" type="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Password</label>
                        <input name="password" className="form-textbox" type="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Confirm Password</label>
                        <input name="password2" className="form-textbox" type="password" placeholder="Confirm Password" value={this.state.password2} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-submit" type="submit" value="Create" />
                    </div>
                </form>
            </div>
        )
    }
}
