import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <SignIn />
      </Wrapper>
    );
  }
}

export default Landing;
