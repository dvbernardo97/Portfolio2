import React from "react";
import "./home.css"


export default function Data() {
    return (
        <div className="home_data">
            <h1 className="home_title">
                Dominic Bernardo
            </h1>
            <h3 className="home_subtitle">Full-Stack Software Engineer</h3>
            <p className="home_description">I am a Nurse turned Software Engineer, and I am very passionate about my work as an engineer and eager to purse more knowledge in the field</p>
            <a href="#contact" className="button button--flex">
                Say Hello
                <i class="uil uil-message"></i>
            </a>
        </div>
    )
}