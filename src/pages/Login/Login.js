import React from "react";
import CSSModules from "react-css-modules";

import styles from "./login.css";

import LoginField from "../../components/LoginField/LoginField";
import LoginButton from "../../components/LoginButton/LoginButton";

class Login extends React.Component {
    render() {
        return (
            <div styleName="login-fields">
                <LoginField placeholder="Name" />
                <LoginField placeholder="Email" />
                <LoginField placeholder="Password" fieldType="password" />
                <LoginButton linkTo="Connect">Login</LoginButton>
            </div>
        );
    }
}

export default CSSModules(Login, styles);