import React from "react";
import "./skills.css"
import DevIcon from "devicon-react-svg"


export default function Skills() {
    return (
        <div id="skills">
            <h2>Skills</h2>
            <div className="container1">
                <div className='skills-icon html-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    <p className="skills-icon-name">HTML5</p>
                </div>
                <div className='skills-icon js-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                    <p className="skills-icon-name">JavaScript</p>
                </div>
                <div className='skills-icon css-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    <p className="skills-icon-name">CSS</p>
                </div>
                <div className='skills-icon node-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    <p className="skills-icon-name">Node.js</p>
                </div>
                <div className='skills-icon react-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <p className="skills-icon-name">React</p>
                </div>
                <div className='skills-icon mongo-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                    <p class="skills-icon-name">MongoDB</p>
                </div>
                <div className='skills-icon python-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                    <p className="skills-icon-name">Python</p>
                </div>
                <div className='skills-icon sql-icon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                    <p className="skills-icon-name">PostgresSQL</p>
                </div>
            </div>
        </div>
    )
}