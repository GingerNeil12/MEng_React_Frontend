import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setCurrentUser } from './actions/authActions';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';

import Home from './components/home/Home';
import Register from './components/register/Register';
import RegisterSuccess from './components/register/RegisterSuccess';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import DiagramHome from './components/diagram/DiagramHome';

import './App.css';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/registerSuccess" component={RegisterSuccess} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path='/diagramHome' component={DiagramHome}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
