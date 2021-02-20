import React from "react";
import { render } from "react-dom";
import './button.css';

function myProfile() {
    alert('Not yours, mine !');
}

function yourProfile() {
    alert("Yes, yours... But it isn't here yet. :P");
}

function meltingPosts() {
    alert('Supposedly, there should be posts from all over the page...');
}

export default function Click() {
    return (
        <div>
            <button className="clickMe" onClick = {myProfile}>
                My_Profile
            </button>
            <button className="clickMe" onClick = {yourProfile}>
                Your_Profile
            </button>
            <button className="clickMe" onClick = {meltingPosts}>
                meltingPosts
            </button>
        </div>
    );
}