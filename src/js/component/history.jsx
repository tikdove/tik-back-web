/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 16:19:38 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-29 19:50:27
 */

import React, { Component } from "react";
import "../../css/history.css";


export class History extends Component {
    render() {
        return (
            <section className="historyTrade">
                <h2>历史业绩</h2>
                <ul className="trade">
                    <li className="trade-title">
                        <span>时间</span>
                        <span>收益率</span>
                        <span>折合年化复利</span>
                    </li>
                    <li>
                        <span>2018-3-29</span>
                        <span>9.62%</span>
                        <span>78.22%</span>
                    </li>
                    <li>
                        <span>2018-5-02</span>
                        <span>3.14%</span>
                        <span>60.10%</span>
                    </li>
                </ul>
            </section>
        );
    }
}