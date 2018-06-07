/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 19:37:42 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-06-07 19:09:53
 * @content: 
 */

import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import Trade from "./trade/index.jsx";
import Order from "./order/index.jsx";

export default class APP extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
    }

    render() {

        let contentStyle = { margin: '24px 16px', padding: 24, background: '#fff', minHeight: window["innerHeight"] - 48 };

        return (
            <Router>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>
                                    <Link to="/">
                                        卖单列表
                                    </Link>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>
                                    <Link to="/order">
                                        买单列表
                                    </Link>
                                </span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={contentStyle}>
                            <Route exact path="/" component={Trade} />
                            <Route path="/order" component={Order} />
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}