import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Login from "./Login/Login";
import Connect from "./Connect/Connect";

export default class Layout extends React.Component {
    render() {
        const Navs = [
            ["Login", "/"],
            ["Connect", "/connect"]
        ];

        return (
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route path="/connect" component={Connect}></Route>
            </div>
        );
    }
}