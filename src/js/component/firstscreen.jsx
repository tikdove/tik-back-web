/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 10:24:47 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-29 21:08:09
 */

import React, { Component } from "react";
import "../../css/firstscreen.css";
import { isMobile } from "../utils/common";

export class FirstScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: window["innerHeight"] < 760 ? 760 : window["innerHeight"]
        }
    }

    goDownload() {
        let height = document.body.clientHeight;
        window.scrollTo({ top: height, behaiver: "smooth" });
    }

    render() {
        let currentStyle = {
            height: isMobile() ? '' : this.state.height
        }

        return (
            <section>
                <div className="firstScreen" style={currentStyle}>
                    <div className="content pt60">
                        <h1 className="logo">
                            <img src={require("../../images/logo.svg")} alt="logo" />
                        </h1>
                        <h3 className="index-text-one mb30">
                            区块链上的科技型股票基金
                        </h3>
                        <p className="mb30 index-text-two">
                            预期年化收益率：<strong>20%</strong>
                        </p>
                        <div className="download">
                            <button onClick={this.goDownload} className="btn-download">
                                下载App
                        </button>
                        </div>
                    </div>
                </div>
                <div className="screen-footer">
                    <div className="screen-footer-bg">
                    </div>
                    <div className="content screen-box">
                        <div>
                            <img src={require("../../images/index-icon1.png")} alt="icon" />
                            区块链保证资产安全
                        </div>
                        <span></span>
                        <div>
                            <img src={require("../../images/index-icon2.png")} alt="icon" />
                            7 x 24 小时流通收益
                        </div>
                        <span></span>
                        <div>
                            <img src={require("../../images/index-icon3.png")} alt="icon" />
                            期年化收益15%以上
                        </div>
                        <span></span>
                        <div>
                            <img src={require("../../images/index-icon4.png")} alt="icon" />
                            精选全球顶尖科技股
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}