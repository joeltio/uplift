import React from "react";
import CSSModules from "react-css-modules";

import styles from "./connect.css";

import ProfileTestimonial from "../../components/ProfileTestimonial/ProfileTestimonial";
import RoundButton from "../../components/RoundButton/RoundButton";

class Connect extends React.Component {
    render() {
        const name = "Nick Halden";
        const testimony = "\"Nick is the best therapist I have been to. He really understands me and helps me through difficult times.\"";
        return (
            <div styleName="connect-page">
                <h1 styleName="header">Your therapist is waiting to chat with you now</h1>
                <div styleName="content">
                    <ProfileTestimonial
                        profilePicSrc="./res/imgs/nick_halden.png"
                        name={name}
                        testimony={testimony} />
                        <p></p>
                    <RoundButton>Talk to the therapist now</RoundButton>
                </div>
            </div>
        );
    }
}

export default CSSModules(Connect, styles);