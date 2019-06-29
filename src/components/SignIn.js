import React, { Component } from "react";
import { Avatar } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { NavLink, Link } from "react-router-dom";
import { withFirebase } from "../firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.firebase
          .doSignInWithEmailAndPassword(values.email, values.password)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            console.log(authUser);
            this.props.history.push("/DashBoard");
          })
          .catch(error => {
            console.log(error);
            this.setState({ error });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { error } = this.state;
    return (
      <div className="form-layout">
        <Avatar size={100} icon="user" />
        <h2>Sign In</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item className="flex-v">
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <div />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <div />
            <Button
              type="secondary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
              {"     "}
            </Button>
            Or {"  "}
            <Link to="SignUp">Register now!</Link>
            {error && <p>{error.message}</p>}
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const SignInForm = Form.create({ name: "normal_login" })(Form1);

const SignIn = withFirebase(SignInForm);

export default SignIn;
