import React, { Component } from 'react'
import '../../css/register/register.css';

export default class Register extends Component {
    render() {
        return (
            <div>
                <form id="register-form" action="">
                    <h1>Register</h1>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Name</label>
                        <input className="form-textbox" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Email</label>
                        <input className="form-textbox" type="email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Password</label>
                        <input className="form-textbox" type="password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="">Confirm Password</label>
                        <input className="form-textbox" type="password" />
                    </div>
                    <div className="form-group">
                        <input className="form-submit" type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        )
    }
}
