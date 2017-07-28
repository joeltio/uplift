import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Login from "./Login/Login";

export default class Layout extends React.Component {
    render() {
        const Navs = [
            ["Login", "/"]
        ];

        return (
            <div>
                <Route exact path="/" component={Login}></Route>
            </div>
        );
    }
}