import React from "react";
import CSSModules from "react-css-modules";

import styles from "./feeling.css";

import RoundButton from "../../components/RoundButton/RoundButton";

class Feeling extends React.Component {
    constructor(props) {
        super(props);
    }

    faceClick(e) {
        document.getElementById("smile").className = "";
        document.getElementById("neutral").className = "";
        document.getElementById("sad").className = "";

        e.target.className = "active";
    }

    render() {
        return (
            <div styleName="feeling-page">
                <h1 styleName="header">Tell us how you are feeling today</h1>
                <div styleName="faces">
                    <button onClick={this.faceClick} id="smile"><img src="./res/imgs/smiling_face.png" /></button>
                    <button onClick={this.faceClick} id="neutral"><img src="./res/imgs/neutral_face.png" /></button>
                    <button onClick={this.faceClick} id="sad"><img src="./res/imgs/sad_face.png" /></button>
                </div>
                <RoundButton linkTo="Chat">Talk to the therapist now</RoundButton>
            </div>
        );
    }
}

export default CSSModules(Feeling, styles);