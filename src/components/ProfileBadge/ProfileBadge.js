import React from "react";
import CSSModules from "react-css-modules";

import styles from "./profileBadge.css";

import RoundProfilePic from "../RoundProfilePic/RoundProfilePic";

class ProfileBadge extends React.Component {
    render() {
        return (
            <div styleName="profile-badge">
                <RoundProfilePic src={this.props.profilePicSrc} />
                <h1 styleName="name">{this.props.name}</h1>
            </div>
        );
    }
}

export default CSSModules(ProfileBadge, styles);