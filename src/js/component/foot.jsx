/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 15:28:57 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-30 13:41:19
 */


import React, { Component } from "react";
import "../../css/foot.css"

export class Foot extends Component {
    render() {
        return (
            <section id="foot" className="foot">
                <div className="content">
                    <div className="foot-box">
                        <div className="foot-box-one">
                            <h4 className="mb10">
                                <img src={require("../../images/logo.svg")} alt="logo" />
                            </h4>
                            <p>
                                Technology is king.
                            </p>
                        </div>
                        <div className="foot-box-two">
                            <h4>
                                下载App, 立即投资获取收益
                            </h4>
                            <img src={require("../../images/ma.png")} alt="二维码" />
                            <p>
                                Android版本下载
                            </p>
                        </div>
                    </div>
                    <footer className="copyright">
                        <p>
                            2018. Tikcoin. All rights reserved.
                        </p>
                    </footer>
                </div>

            </section>
        );
    }
}