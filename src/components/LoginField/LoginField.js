import React from "react";
import CSSModules from "react-css-modules";

import styles from "./loginField.css";

class LoginField extends React.Component {
    render() {
        return (
            <input type={this.props.fieldType} placeholder={this.props.placeholder} />
        );
    }
}

export default CSSModules(LoginField, styles);