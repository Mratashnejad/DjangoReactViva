import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const Customlayout = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/extrashift">Extra Shift</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/courses">Courses</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Avatar style={{}} icon={<UserOutlined />} />
        </Menu>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link></Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ background: "#fff", padding: 24, minHeight: 280 }}
          className="site-layout-content"
        >
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Vivaro Dealers ©2020 Created by Mr.Atashnejad
      </Footer>
    </Layout>
  );
};

export default Customlayout;
