/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 19:37:42 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-06-04 19:43:57
 * @content: 
 */

import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

let One = () => (
    <div>
        One123
    </div>
);

let Two = () => (
    <div>
        Two123
    </div>
);



export default class APP extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
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
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 700 }}>
                            <hr />
                            Here is the content.
                            <hr />
                            <Route exact path="/" component={One} />
                            <Route path="/order" component={Two} />
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}