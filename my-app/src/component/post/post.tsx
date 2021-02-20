import { ReactComponent } from "*.svg";
import React from "react";
import'./post.css'

type Postprops = {
    imgProfileURL: string
    profileName: string
    profileID: number
    postTitle: string
    postMessage: string
}

function ShowPost(props: Postprops) {
    return (
        <div className="post">
            <div className="posterInfo">
                <img className="photoProfile"
                    src={props.imgProfileURL}
                    alt={props.profileName}
                />
                <div className="profileName">
                    {props.profileName}
                    {props.profileID}
                </div>
            </div>
            <div className="post">
                {props.postTitle}
            </div>
            <div className="postText">
                {props.postMessage}
            </div>
        </div>
    );
}

export default ShowPost;