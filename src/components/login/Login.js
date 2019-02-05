import React, { Component } from 'react'
import '../../css/login/Login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(newUser);
  }
  render() {
    return (
      <div>
        <form id="login-form" onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="" className="form-label">Email</label>
            <input name="email" type="email" className="form-textbox" onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="">Password</label>
            <input name="password" className="form-textbox" type="password" onChange={this.onChange}/>
          </div>
          <div className="form-gorup">
            <input type="submit" value="Login" className="form-submit"/>
          </div>
        </form>
      </div>
    )
  }
}
