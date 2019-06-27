import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Attendance</Menu.Item>
      </Menu>
    </Header>
  );
}
