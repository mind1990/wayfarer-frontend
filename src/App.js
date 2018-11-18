import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './normalize.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Cities from './components/Cities';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';

import * as routes from './constants/routes';


class App extends Component {
  render() {
    return (

      <div className="">
        <Header />
        <Switch>
          <Route
            exact path={routes.LANDING}
              component={Landing}
          />
          <Route
            exact path={routes.SIGN_UP}
             component={Signup}
          />
          <Route
            exact path={routes.SIGN_IN}
             component={Signin}
          />
          
          <Route
            exact path={routes.PROFILE}
             component={Profile}
          />
          <Route
            exact path={routes.CITIES }
            component={Cities}
          />
          <Route
            exact path={routes.LOG_OUT}
             component={Logout}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
