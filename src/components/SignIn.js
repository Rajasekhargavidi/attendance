import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Form1 extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form-layout">
        <h2>Sign In</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
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
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In{" "}
            </Button>
            Or <a href="">signup now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const SignIn = Form.create({ name: "normal_login" })(Form1);

export default SignIn;
