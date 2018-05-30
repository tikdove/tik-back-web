/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 16:19:38 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-30 11:45:37
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
                        <span>投资时间</span>
                        <span>至今年化收益</span>
                        <span>至今总收益</span>
                    </li>
                    <li>
                        <span>2017.01.06</span>
                        <span>53.02%</span>
                        <span>93.59%</span>
                    </li>
                    <li>
                        <span>2016.01.12</span>
                        <span>42.59%</span>
                        <span>103.31%</span>
                    </li>
                    <li>
                        <span>2015.01.17</span>
                        <span>38.56%</span>
                        <span>166.02%</span>
                    </li>
                </ul>
            </section>
        );
    }
}