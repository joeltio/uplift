import React from "react";
import CSSModules from "react-css-modules";

import styles from "./roundButton.css";

class RoundButton extends React.Component {
    render() {
        return (
            <button styleName="button">{this.props.children}</button>
        );
    }
}

export default CSSModules(RoundButton, styles);