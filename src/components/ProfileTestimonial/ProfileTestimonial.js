import React from "react";
import CSSModules from "react-css-modules";

import styles from "./profileTestimonial.css";

import ProfileBadge from "../ProfileBadge/ProfileBadge";

class ProfileTestimonial extends React.Component {
    render() {
        return (
            <div styleName="profile-testimonial">
                <ProfileBadge profilePicSrc={this.props.profilePicSrc} name={this.props.name} />
                <div styleName="testimony">
                    <p>{this.props.testimony}</p>
                </div>
            </div>
        );
    }
}

export default CSSModules(ProfileTestimonial, styles);