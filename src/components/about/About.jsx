import React from "react";
import "./about.css"
import Info from "./Info";
import CV from "../../assets/Dominic-Cv.pdf"
import AboutImg from "../../assets/profile_pic.JPG"


export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="" className="about_img" />

                <div className="about_data">
                    <Info />

                    <p className="about_description">Full-Stack Software Engineer</p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}