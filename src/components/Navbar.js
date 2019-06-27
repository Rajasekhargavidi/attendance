import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header style={{ lineHeight: "64px" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "34px", textAlign: "center" }}
      >
        <Menu.Item>
          <h1
            style={{
              color: "white",
              fontWeight: "bolder",
              fontSize: "40px",
              marginTop: "10px",
              color: "linen"
            }}
          >
            <strong>ATTENDANCE</strong>
          </h1>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
