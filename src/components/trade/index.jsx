/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 19:54:08 
 * @Last Modified by:   Mr.He 
 * @Last Modified time: 2018-06-04 19:54:08 
 * @content: 
 */

import React, { Component } from "react";
import { Button, Table } from "antd";
import * as uuid from "uuid";

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

export default class Trade extends Component {
    constructor() {
        super();

        this.state = {
            data: [{
                id: "12133",
                name: "Amy",
                gender: "Man",
                email: "45452@163.com"
            }, {
                id: "121331",
                name: "Amy1",
                gender: "Man",
                email: "45452@163.com"
            }, {
                id: "1213223",
                name: "Amy2",
                gender: "Man",
                email: "45452@163.com"
            }],
            pagination: {
                pageSize: 20,
                page: 15,
                current: 1,
            },
            loading: false
        }
    }

    change(pagination, filters, sorter) {
        console.log(pagination, filters, sorter);
    }

    render() {
        return (
            <section>
                <h1>
                    卖方挂单列表
                 </h1>
                <div>
                    <Button style={{ 'marginRight': '10px' }} size="large" type="primary">默认(未确认订单)</Button>
                    <Button style={{ 'marginRight': '10px' }} size="large" type="primary">已确认订单</Button>
                    <Button style={{ 'marginRight': '10px' }} size="large" type="primary">已卖完订单</Button>
                </div>
                <Table columns={columns}
                    rowKey={record => record.id}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.change}
                    onRow={(record) => {
                        return {
                            onClick() {
                                console.log(record, 123)
                            }
                        }
                    }}
                />
            </section>

        )
    }
}