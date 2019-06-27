import React, { Component } from "react";
import "./App.css";
import Landing from "./views/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

const { Content } = Layout;

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Content>
            <div style={{ height: "80%" }}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/DashBoard" component={DashBoard} />
              </Switch>
            </div>
          </Content>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
