import React, { Component } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "../css/index.css";
import { FirstScreen, Step, ProjectDevelopment, TradeRules, Foot, History } from "./component";

class APP extends Component {
    render() {
        return (
            <div>
                <FirstScreen />
                <Step />
                <ProjectDevelopment />
                <History />
                <TradeRules />
                <Foot />
            </div>
        );
    }
}

ReactDOM.render(
    <APP></APP>,
    document.getElementById("root")
);