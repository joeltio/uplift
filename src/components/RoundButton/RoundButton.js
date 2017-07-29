import React from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";

import styles from "./roundButton.css";

class RoundButton extends React.Component {
    render() {
        return (
            <Link to={this.props.linkTo}>
                <button styleName="button">{this.props.children}</button>
            </Link>
        );
    }
}

export default CSSModules(RoundButton, styles);