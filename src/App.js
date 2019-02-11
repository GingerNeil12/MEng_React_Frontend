import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/home/Home';
import Register from './components/register/Register';
import RegisterSuccess from './components/register/RegisterSuccess';
import Login from './components/login/Login';
import Header from './components/header/Header';

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register-success" component={RegisterSuccess} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
