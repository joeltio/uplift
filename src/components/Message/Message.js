import React from "react";
import CSSModules from "react-css-modules";

import styles from "./message.css";

class Message extends React.Component {
    render() {
        var side = "";
        if (this.props.side == "left") {
            side = "left";
        } else if (this.props.side == "right") {
            side = "right";
        }
        return (
            <div styleName={side}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default CSSModules(Message, styles);