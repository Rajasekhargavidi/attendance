import React, { Component } from "react";
import "./App.css";
import Landing from "./views/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ height: "80%" }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/DashBoard" component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
