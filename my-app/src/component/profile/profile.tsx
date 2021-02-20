import { ReactComponent } from "*.svg";
import React from "react";
import './profile.css'

type Profileprops = {
    imgProfileURL: string
    profileName: string
    profileID: number
    profileMessage: string
    usrMood: string
}

function ShowProfile(props: Profileprops) {
    return (
        <div>
            <div className="profile">
                <div className="profileInfo">
                    <img className="photoProfile"
                        src={props.imgProfileURL}
                        alt={props.profileName}
                    />
                    <div className="profileName">
                        {props.profileName}
                        {props.profileID}
                    </div>
                </div>
                <div className="mood">
                    {props.usrMood}
                </div>
                <div className="description">
                    {props.profileMessage}
                </div>
            </div>
        </div>
    );
}

export default ShowProfile;