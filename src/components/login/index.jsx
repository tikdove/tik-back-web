/*
 * @Author: Mr.He 
 * @Date: 2018-06-04 17:29:29 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-06-08 18:28:33
 * @content: 
 */

import React, { Component } from "react";
import particlesConfig from "./particles.json";
import particlesJS from "particles.js";

console.log(particlesConfig)
export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            box: {
                height: window["innerHeight"],
                width: window["innerWidth"],
                background: "#090"
            }
        }
    }

    componentDidMount() {
        // sessionStorage.setItem("token", "ok");
        // setTimeout(() => {
        //     location.hash = "/app";
        // }, 3000);

        let box = this.refs.box;
        particlesJS.load("box", particlesConfig, () => {
            console.log("okOk")
        })
    }

    render() {
        window.onresize = () => {
            this.setState({
                box: {
                    height: window["innerHeight"],
                    width: window["innerWidth"],
                    background: "#090"
                }
            })
        }
        return (
            <div id="box" ref="box" style={this.state.box}>

            </div>
        );
    }
}