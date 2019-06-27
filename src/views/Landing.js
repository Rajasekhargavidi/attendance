import React, { Component } from 'react'
import Wrapper from "../components/Wrapper";
import SignUp from "./../components/SignUp";
import Navbar from '../components/Navbar';

class Landing extends Component {
    render() {
        return (
            <Wrapper>
                <Navbar />
                <SignUp />
            </Wrapper>
        )
    }
}

export default Landing
