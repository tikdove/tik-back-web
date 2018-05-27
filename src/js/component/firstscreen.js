/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 10:24:47 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-27 17:11:00
 */

import React, { Component } from "react";
import "../../css/firstscreen.css";

export class FirstScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: window["innerHeight"] < 760 ? 760 : window["innerHeight"]
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
        console.log(this.ref);
    }
    componentDidMount() {
        console.log(this.ref);
    }

    goDownload() {
        let height = document.body.clientHeight;
        window.scrollTo({ top: height, behaiver: "smooth" });
    }

    render() {
        let currentStyle = {
            height: this.state.height
        }
        return (
            <section className="firstScreen" style={currentStyle}>
                <div className="content pt60">
                    <h1 className="logo-text">
                        TIK
                    </h1>
                    <h3 className="index-text-one mb30">
                        区块链上的科技型港美股票基金
                    </h3>
                    <p className="mb30 index-text-two">
                        预期年化收益率：<strong>15%</strong>
                    </p>
                    <div className="download">
                        <button onClick={this.goDownload} className="btn-download">
                            下载app
                        </button>
                    </div>
                    <div className="span-box">
                        <span>
                            零门槛 <img src={require("../../images/index-icon-1.png")} alt="icon" />
                            <b></b>
                        </span>
                        <span>
                            高收益 <img src={require("../../images/index-icon-2.png")} alt="icon" />
                            <b></b>
                        </span>
                        <span>
                            低风险 <img src={require("../../images/index-icon-3.png")} alt="icon" />
                            <b></b>
                        </span>
                    </div>
                </div>
            </section >
        );
    }
}