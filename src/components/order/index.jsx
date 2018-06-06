/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 19:54:08 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-06-06 18:17:53
 * @content: 
 */

import React, { Component } from "react";
import { Button, Table, Modal } from "antd";
import * as uuid from "uuid";
import reqwest from "reqwest";
import moment from "moment-timezone";
import { BACK_SYSTEM_URL } from "../../../config/config.json";


const columns = [{
    title: '买方用户uid',
    dataIndex: 'uid',
}, {
    title: '购入品种名称',
    dataIndex: 'tradeInfo.periodName',
}, {
    title: '买入数量',
    dataIndex: 'qty',
}, {
    title: '购入单价/¥',
    dataIndex: 'tradeInfo.price',
}, {
    title: '金额',
    render(text, record, index) {
        if (!record.tradeInfo) {
            record.tradeInfo = record.tradeSnapshot;
        }
        return Math.round(record.qty * record.tradeInfo.price * 100) / 100;
    }
}, {
    title: 'tradeId',
    dataIndex: 'tradeId',
}, {
    title: '创建日期',
    dataIndex: 'createdAt',
    render(text, record, index) {
        record.datetime = moment(text).tz("Asia/ShangHai").format("YYYY-MM-DD hh:mm:ss");
        return record.datetime;
    }
}, {
    title: '状态',
    dataIndex: 'status',
    render(text, record, index) {
        //状态 1创建 2.用户点击已付款 3.客服确认并交易 4.无效

        switch (text) {
            case 1:
                return "未付款";
            case 2:
                return "买家已确认付款";
            case 3:
                return "交易完成";
            case 4:
                return "无效"
            default:
                return "warn:error!"
        }
    }
}];

export default class Trade extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            /* 分页相关 */
            pagination: {
                pageSize: 5,
                page: 1,
                current: 1,
                total: 0
            },
            loading: false,
            /* 查询数据状态, 默认查看买家已确认付款 */
            status: 2,

            /* dialog */
            dialog: {
                visible: false,
                record: {
                }
            }
        }

        let keys = ["fetch", "fetchCreate", "fetchBuyConfrim", "fetchDone", "fetchAll", "paginationChange", "handleOk", "handleCancel"];
        for (let key of keys) {
            this[key] = this[key].bind(this);
        }
    }

    handleOk() {
        let _this = this;
        reqwest({
            url: BACK_SYSTEM_URL + "/v1/order",
            method: "put",
            data: {
                tradeId: this.state.dialog.record._id
            }
        }).then((result) => {
            let dialog = _this.state.dialog;
            dialog.visible = false;
            _this.fetch();
            _this.setState({
                dialog
            })
        }, (err, msg) => {
            console.log(err, msg);
        })

        console.log("ok")
    }
    handleCancel() {
        let dialog = this.state.dialog;
        dialog.visible = false;
        this.setState({
            dialog
        })
    }

    paginationChange(pagination, filters, sorter) {
        // console.log(pagination, filters, sorter);
        this.setState({
            pagination
        });
        setTimeout(this.fetch, 0)
    }

    rowClick(record) {
        /* if (record.status != 2) {
            return;
        } */

        this.setState({
            dialog: {
                visible: true,
                record: record
            }
        })
    }

    fetch(status) {
        let _this = this;

        if (!status) {
            status = this.state.status
        }
        this.setState({
            loading: true,
            status
        })

        let { current, pageSize } = this.state.pagination;
        reqwest({
            url: BACK_SYSTEM_URL + "/v1/order",
            method: "get",
            data: {
                page: current - 1,
                limit: pageSize,
                status
            }
        }).then((resp) => {
            // console.log(resp);
            if (resp.code != 0) {
                return
            }
            _this.setState({
                data: resp.data.rows,
                loading: false,
                pagination: {
                    total: resp.data.count,
                    page: Math.ceil(resp.data.count / pageSize),
                    current,
                    pageSize
                }
            })
        }, (err, msg) => {
            console.log(err, msg);
        }).always((resp) => {
            _this.setState({
                loading: false
            })
        });
    }

    fetchCreate() {
        let pagination = this.state.pagination;
        pagination.current = 1;
        this.setState({
            pagination
        })
        this.fetch(1)
    }
    fetchBuyConfrim() {
        let pagination = this.state.pagination;
        pagination.current = 1;
        this.setState({
            pagination
        })
        this.fetch(2);
    }
    fetchDone() {
        let pagination = this.state.pagination;
        pagination.current = 1;
        this.setState({
            pagination
        })
        this.fetch(3);
    }

    fetchInvalid() {
        let pagination = this.state.pagination;
        pagination.current = 1;
        this.setState({
            pagination
        })
        this.fetch(4);
    }

    fetchAll() {
        let pagination = this.state.pagination;
        pagination.current = 1;
        this.setState({
            pagination
        })
        this.fetch(-1);
    }
    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <section>
                <h1>
                    买方挂单列表
                 </h1>
                <div className="mb10">
                    <Button style={{ 'marginRight': '10px' }} onClick={this.fetchBuyConfrim} size="large" type="default">标记已付款(默认)</Button>
                    <Button style={{ 'marginRight': '10px' }} onClick={this.fetchCreate} size="large" type="default">未付款</Button>
                    <Button style={{ 'marginRight': '10px' }} onClick={this.fetchDone} size="large" type="default">交易完成订单</Button>
                    <Button style={{ 'marginRight': '10px' }} onClick={this.fetchInvalid} size="large" type="default">无效订单</Button>
                    <Button style={{ 'marginRight': '10px' }} onClick={this.fetchAll} size="large" type="default">全部</Button>
                </div>
                <Table columns={columns}
                    rowKey={record => record._id}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.paginationChange}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                this.rowClick(record)
                            }
                        }
                    }}
                />

                <Modal
                    title="买单打款确认操作"
                    visible={this.state.dialog.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >

                    <h3>订单信息</h3>
                    <p>
                        {/* 姓名: <strong>{this.state.dialog.record.alipay.realName}</strong> */}
                        <br />
                        {/* 支付宝账号:  <strong>{this.state.dialog.record.alipay.account}</strong> */}
                        <br />
                        {/* 卖出总量:  <strong>{this.state.dialog.record.totalSuply}</strong> */}
                        <br />
                        日期: <strong>{this.state.dialog.record.datetime}</strong>
                        <br />
                        {/* 单价: <strong>{this.state.dialog.record.price} ¥/tik</strong> */}
                    </p>
                    <hr />
                    <p>1.请检查该用户在同一时段是否存在多次相同卖出记录。</p>
                    <p>2.请检查用户的支付宝账号。</p>
                    <h4>点击ok后，该卖出单即生效。用户在交易列表即可见</h4>

                </Modal>
            </section>
        )
    }
}