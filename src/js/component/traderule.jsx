/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 15:12:23 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-29 20:21:56
 */

import React, { Component } from "react";
import "../../css/traderule.css";

export class TradeRules extends Component {
    render() {
        return (
            <section className="traderule">
                <h2>
                    如何交易?
                </h2>
                <p className="trade-text-two">
                    TIK买入赎回免手续费
                </p>
                <div className="content trade-box">
                    <div>
                        <p className="trade-box-text1">买入流程</p>
                        <p>赎回流程</p>
                    </div>
                    <img src={require("../../images/trade.png")} alt="trade" />
                </div>
            </section>
        );
    }
}