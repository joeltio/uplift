import React from "react";
import CSSModules from "react-css-modules";

import styles from "./connect.css";

class Connect extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

export default CSSModules(Connect, styles);