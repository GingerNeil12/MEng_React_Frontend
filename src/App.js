import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Navbar from './components/header/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" render={
              props => (
                <React.Fragment>
                  <Login />
                </React.Fragment>
              )
            }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
