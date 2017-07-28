import React from "react";
import CSSModules from "react-css-modules";

import styles from "./roundProfilePic.css";

class RoundProfilePic extends React.Component {
    render() {
        return (
            <img styleName="img" src={this.props.src}></img>
        );
    }
}

export default CSSModules(RoundProfilePic, styles);