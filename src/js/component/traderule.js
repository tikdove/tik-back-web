/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 15:12:23 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-27 15:18:13
 */

import React, { Component } from "react";
import "../../css/traderule.css";

export class TradeRules extends Component {
    render() {
        return (
            <section className="traderule">
                <h2>
                    交易规则
                </h2>
                <div>
                    <img src={require("../../images/trade.png")} alt="交易规则" />
                </div>
            </section>
        );
    }
}