import React from "react";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {/* {this.props.isAuthenticated ? (
              <Menu.Item key="2" onClick={this.props.logout}>
                Logout
              </Menu.Item>
            ) : (
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )} */}

            <Menu.Item key="1">
              <Link to="/extrashift">Extra Shift </Link>
            </Menu.Item>
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: 1000 }}
            />
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">List</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ali Design ©2016 Created by Mr.Atashnejad
        </Footer>
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
      // logout: () => dispatch(actions.logout()) 
  }
}

export default  withRouter(connect(null, mapDispatchToProps)(CustomLayout));