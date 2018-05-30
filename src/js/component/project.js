/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 14:53:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-30 10:43:36
 */

import React, { Component } from "react";
import "../../css/project.css";

let isShowCard = false;
let showCard = (eles) => {
    eles.map((item, index) => {
        setTimeout(() => {
            item.className = item.className + " card-show";
            console.log(index, item.className);
        }, index * 500)
    })
}
export class ProjectDevelopment extends Component {
    componentDidMount() {
        console.log(this.refs);
        let box = this.refs.projectSection;
        let cards = [this.refs.cardOne, this.refs.cardTwo, this.refs.cardThree, this.refs.cardFour];
        window.onscroll = function () {
            let clientParams = box.getBoundingClientRect();
            if (clientParams.top < 250 && !isShowCard) {
                isShowCard = true;
                showCard(cards);
            }
        };

    }
    render() {
        return (
            <section ref="projectSection" id="test" className="project">
                <h2 className="project-title">
                    项目里程碑
                </h2>
                <div className="project-content">
                    <p className="project-line"></p>
                    <div ref="projectBox" className="project-box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                        <div ref="cardOne" className="project-card">
                            <h5>
                                December 2017
                            </h5>
                            <p>
                                idea
                            </p>
                        </div>
                        <div ref="cardTwo" className="project-card">
                            <h5>
                                Jan 2018
                            </h5>
                            <p>
                                商业模式实验
                            </p>
                        </div>
                        <div ref="cardThree" className="project-card">
                            <h5>
                                Apr 2018
                            </h5>
                            <p>
                                年化收益率达到35%
                            </p>
                        </div>
                        <div ref="cardFour" className="project-card">
                            <h5>
                                Jun 2018
                            </h5>
                            <p>
                                APP上线开放投资
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}