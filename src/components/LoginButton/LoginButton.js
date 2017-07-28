import React from "react";
import CSSModules from "react-css-modules";

import styles from "./loginButton.css";

class LoginButton extends React.Component {
    render() {
        return (
            <button styleName="button">{this.props.children}</button>
        );
    }
}

export default CSSModules(LoginButton, styles);