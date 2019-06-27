import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { NavLink } from "react-router-dom";
import EditModal from "./EditModal";
import AddStudents from "./AddStudents";
import InModal from "./InModal";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class DashBoard extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "50px" }}
          >
            <Menu.Item>
              <h1 style={{ color: "white" }}>
                <Icon
                  type="dashboard"
                  theme="filled"
                  style={{ fontSize: "25px", color: "" }}
                />
                Teacher DashBoard
              </h1>
            </Menu.Item>
            <Menu.Item>
              <h2 style={{ color: "white" }}>
                <AddStudents />
              </h2>
            </Menu.Item>
            <Menu.Item>
              <h2 style={{ color: "white" }}>
                <EditModal />
              </h2>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
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
                    Admin
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
                  List
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
          <Layout style={{ padding: "0 5px 5px", borderBlockColor: "black" }}>
            <Breadcrumb style={{ margin: "1px", borderBlockColor: "black" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 5,
                margin: 0,
                minHeight: 500,
                borderColor: "black"
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoard;
