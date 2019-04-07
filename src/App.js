import React, { Component } from "react";
import { Provider } from "./Context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/accountMan/Login";
import SignUp from "./components/accountMan/SignUp";
import Home from "./components/pages/home/Home";
import Header from "./components/layout/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
