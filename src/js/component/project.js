/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 14:53:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-29 11:16:18
 */

import React, { Component } from "react";
import "../../css/project.css";

export class ProjectDevelopment extends Component {

    componentDidMount() {
        /* let canvas = this.refs.myCanvas;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "#fff";
        ctx.moveTo(0, 50);
        ctx.lineTo(1200, 50);
        ctx.strokeStyle = '#D0DDf5';

        ctx.beginPath();
        ctx.arc(240, 50, 10, 0, 2 * Math.PI);
        ctx.stroke(); */
    }
    render() {
        return (
            <section className="project">
                <h2 className="project-title">
                    项目发展历程
                    </h2>
                <div className="project-content">
                    <p className="project-line"></p>
                    <div className="project-box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                        <div className="project-card">
                            <h5>
                                December 2017
                            </h5>
                            <p>
                                idea
                            </p>
                        </div>
                        <div className="project-card">
                            <h5>
                                Jan 2018
                            </h5>
                            <p>
                                商业模式实验
                            </p>
                        </div>
                        <div className="project-card">
                            <h5>
                                Apr 2018
                            </h5>
                            <p>
                                年华收益率达到35%
                            </p>
                        </div>
                        <div className="project-card">
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