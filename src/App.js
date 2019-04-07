import React, { Component } from "react";
import { Provider } from "./Context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
            <Switch>
              {/* <Route exact path="/" component={} />
              <Route exact path="/login" component={} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
