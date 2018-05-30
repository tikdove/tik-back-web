/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 14:09:09 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-30 13:46:50
 */

import React, { Component } from "react";
import "../../css/introduction.css";

export class Step extends Component {
    render() {
        return (
            <section className="step">
                <div className="content">
                    <h2 className="step-title">
                        区块链 + 数字货币 + 科技股
                    </h2>
                    <ul className="step-ul">
                        <li>
                            <div className="step-line"></div>
                            <img src={require("../../images/icon1.png")} alt="step" />
                            <h4>
                                真实的投资项目做支撑
                            </h4>
                            <p>
                                我们将已购的科技股转换为TIK份额，用户通过USDT换购TIK份额，科技股的增值带动数字资产增值。
                            </p>
                        </li>
                        <li>
                            <div className="step-line"></div>
                            <img src={require("../../images/icon2.png")} alt="step" />
                            <h4>
                                透明的资产交易记录
                            </h4>
                            <p>
                                运用最新的区块链技术记录用户的每一笔转账记录。同时，我们会定期公布科技股的持仓情况，并通过专业股票分析团队进行调仓。
                            </p>
                        </li>
                        <li>
                            <div className="step-line"></div>
                            <img src={require("../../images/icon3.png")} alt="step" />
                            <h4>
                                数字货币降低美股购买门槛
                            </h4>
                            <p>
                                数字货币的使用，简化美港股开户、交易等一系列购买步骤，降低投资门槛，以期获得高收益。
                            </p>
                        </li>
                        <li>
                            <div className="step-line"></div>
                            <img src={require("../../images/icon4.png")} alt="step" />
                            <h4>
                                科技股的增值带动资产增值
                            </h4>
                            <p>
                                专业股票投资团队，利用大数据合理配置科技股，有效降低整体风险。近10年，年化收益率不低于20%；长期持有 TIK 份额，我们一起提前实现财务自由。
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}