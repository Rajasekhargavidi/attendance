import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, List } from "antd";
import { NavLink, Link } from "react-router-dom";
import EditModal from "./EditModal";
import InModal from "./InModal";
import LoadMoreList from "../Content/List";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
class DashBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Layout style={{ height: "100%" }}>
            <div style={{ height: "45px" }}>
              <Header className="header">
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                  style={{ lineHeight: "45px" }}
                >
                  <Menu.Item>
                    <h3 style={{ color: "lavender" }}>
                      <Icon
                        type="dashboard"
                        theme="filled"
                        style={{ fontSize: "25px", color: "gold" }}
                      />
                      Teacher DashBoard
                    </h3>
                  </Menu.Item>
                  <div style={{ float: "right" }}>
                    <Menu.Item>
                      <h2 style={{ color: "white" }}>
                        <EditModal />
                      </h2>
                    </Menu.Item>
                  </div>
                </Menu>
              </Header>
            </div>
            <Layout>
              <Sider width={180} style={{ background: "#ffe" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        Sidabs
                      </span>
                    }
                  >
                    <Menu.Item key="1">Profile</Menu.Item>
                    <Menu.Item key="2">
                      <NavLink to="/">
                        <Icon type="logout" />
                        LogOut
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        Courses
                      </span>
                    }
                  >
                    <Menu.Item key="5">Java Script</Menu.Item>
                    <Menu.Item key="6">Html & Css</Menu.Item>
                    <Menu.Item key="7">Php</Menu.Item>
                    <Menu.Item key="8">BootStrap</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="usergroup-add" />
                        Students
                      </span>
                    }
                  >
                    <Menu.Item key="9">
                      <Icon type="book" theme="filled" />
                      <NavLink to="/AddStudents">Add Student</NavLink>
                    </Menu.Item>
                    <Menu.Item key="10">
                      <Icon type="account-book" theme="filled" />
                      Attendance
                    </Menu.Item>
                    <Menu.Item key="11">
                      <Icon type="database" theme="filled" />
                      Details
                    </Menu.Item>
                    <Menu.Item key="12">
                      <Icon type="more" />
                      other
                    </Menu.Item>
                  </SubMenu>
                  <Menu key="4" style={{ paddingLeft: "15px" }}>
                    <InModal />
                  </Menu>
                </Menu>
              </Sider>
              <Layout
                style={{
                  padding: "0 5px 5px",
                  height: " -webkit-fill-available"
                }}
              >
                <Content
                  style={{
                    padding: 1,
                    margin: 0,
                    backgroundColor: "lightgray"
                  }}
                >
                  <LoadMoreList />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
        <div>
          <Footer
            style={{
              textAlign: "center",
              color: "black",
              backgroundColor: "darkolivegreen"
            }}
          >
            <b>Students Attendance App ©2019 Created by Sidabs Labs</b>
          </Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
