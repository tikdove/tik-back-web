/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 19:54:08 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-06-05 21:12:44
 * @content: 
 */

import React, { Component } from "react";
import { Button, Table, Modal } from "antd";
import * as uuid from "uuid";
import reqwest from "reqwest";
import moment from "moment-timezone";

const columns = [{
    title: 'Name',
    dataIndex: 'alipay.realName',
}, {
    title: '支付宝账号',
    dataIndex: 'alipay.account',
}, {
    title: '总数',
    dataIndex: 'totalSuply',
}, {
    title: '单价',
    dataIndex: 'price',
    render(text) {
        return text + " ¥"
    }
}, {
    title: '剩余',
    dataIndex: 'restSuply',
}, {
    title: '创建日期',
    dataIndex: 'createdAt',
    render(text, record, index) {
        return moment(text).tz("Asia/ShangHai").format("YYYY-MM-DD hh:mm:ss")
    }
}, {
    title: '状态',
    dataIndex: 'status',
    render(text, record, index) {
        // 1新建待审核 2正常 3下架 4非法

        switch (text) {
            case 1:
                return "新建待审核";
            case 2:
                return "正常";
            case 3:
                return "下架";
            default:
                return "非法"
        }
    }
}];

export default class Trade extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            visible: false,
            pagination: {
                pageSize: 20,
                page: 15,
                current: 1,
            },
            loading: false
        }

        this.rowClick = this.rowClick.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    showModal() {
        this.setState({
            visible: true
        })
    }

    handleOk() {
        console.log("ok");
        this.setState({
            visible: false
        })
    }
    handleCancel() {
        console.log("cancel");
        this.setState({
            visible: false
        })
    }

    change(pagination, filters, sorter) {
        console.log(pagination, filters, sorter);
    }

    rowClick(record) {
        console.log(record, 123)
        this.showModal();
    }

    componentDidMount() {
        let _this = this;
        reqwest({
            url: "http://localhost:3003/v1/trade",
            method: "get",
            success(resp) {
                console.log(11111, resp);

                _this.setState({
                    data: resp.data.rows
                })
            },
            error(err) {
                console.error(err);
            }
        });
    }

    render() {
        return (
            <section>
                <h1>
                    卖方挂单列表
                 </h1>
                <div className="mb10">
                    <Button style={{ 'marginRight': '10px' }} size="large" type="default">默认(未确认订单)</Button>
                    <Button style={{ 'marginRight': '10px' }} size="large" type="default">已确认订单</Button>
                    <Button style={{ 'marginRight': '10px' }} size="large" type="default">已卖完订单</Button>
                </div>
                <Table columns={columns}
                    rowKey={record => record._id}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.change}
                    onRow={(record) => {
                        return {
                            onClick: this.rowClick
                        }
                    }}
                />

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </section>

        )
    }
}