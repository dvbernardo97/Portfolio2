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

                    <p className="about_description">Full-Stack Software Engineer. After working in the healthcare industry, I realized my passion for technology and its potential
                        to make a positive impact in the world. I decided to make a career transition to software
                        engineering, which would allow me to blend my knowledge and experience in healthcare with my
                        interest in technology. I went back to school and received the required education and training
                        in software engineering and computer science.
                        I am now a software developer, who brings the healthcare industry experience to technology,
                        that's why I am able to design and develop innovative solutions that improves patient outcomes,
                        streamline healthcare processes and help healthcare providers to better understand, manage, and
                        leverage their data.
                        I am well-versed in various programming languages and technologies including Python, JavaScript,
                        and React, and have experience working in Agile development methodologies.
                        My healthcare background has given me a unique perspective on the role of technology in
                        healthcare, and I am excited to continue my journey in the tech industry, working on projects
                        that have the potential to make a real difference in the world.</p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}