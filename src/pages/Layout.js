import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Login from "./Login/Login";
import Connect from "./Connect/Connect";
import Feeling from "./Feeling/Feeling";
import Chat from "./Chat/Chat";

export default class Layout extends React.Component {
    render() {
        const Navs = [
            ["Login", "/"],
            ["Connect", "/connect"],
            ["Feeling", "/feeling"],
            ["Chat", "/chat"]
        ];

        return (
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route path="/connect" component={Connect}></Route>
                <Route path="/feeling" component={Feeling}></Route>
                <Route path="/chat" component={Chat}></Route>
            </div>
        );
    }
}