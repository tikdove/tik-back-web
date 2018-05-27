/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 16:19:38 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-27 16:35:14
 */

import React, { Component } from "react";
import "../../css/history.css";


export class History extends Component {
    render() {
        return (
            <section className="historyTrade">
                <h2>历史业绩</h2>
                <img src={require("../../images/history.png")} />
            </section>
        );
    }
}