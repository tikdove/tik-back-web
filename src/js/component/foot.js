/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 15:28:57 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-27 16:47:49
 */


import React, { Component } from "react";
import "../../css/foot.css"

export class Foot extends Component {
    render() {
        return (
            <section id="foot">
                <div className="foot">
                    <p className="foot-title">
                        下载APP，立即投资获取收益
                    </p>
                    <ul className="foot-box">
                        <li>
                            <img src={require("../../images/ma.png")} alt="下载二维码" />
                            <p>
                                安卓版本下载
                        </p>
                        </li>
                    </ul>
                </div>
                <footer className="copyright">
                    2018. Tikcoin. All rights reserved.
                </footer>
            </section>
        );
    }
}