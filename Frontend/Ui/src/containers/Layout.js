import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const Customlayout = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Extra Shift</Menu.Item>
          <Menu.Item key="3">Courses</Menu.Item>
          <Avatar icon={<UserOutlined />} />

          {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background:'#fff',padding:24,minHeight:280}} className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Vivaro Dealers ©2020 Created by Mr.Atashnejad
      </Footer>
    </Layout>
  );
};

export default Customlayout;
