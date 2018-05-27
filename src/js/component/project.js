/*
 * @Author: Mr.He 
 * @Date: 2018-05-27 14:53:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-05-27 15:08:27
 */

import React, { Component } from "react";
import "../../css/project.css";

export class ProjectDevelopment extends Component {
    render() {
        return (
            <section className="project">
                <div className="content">
                    <h2 className="project-title">
                        项目发展历程
                    </h2>
                    <div className="project-content">
                        <img src={require("../../images/Slice.png")} alt="发展历程" />
                    </div>
                </div>
            </section>
        );
    }
}