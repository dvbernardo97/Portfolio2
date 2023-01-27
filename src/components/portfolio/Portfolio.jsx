import React from "react";
import "./portfolio.css"
import Anime from "../../assets/anime.png"
import Pixel from "../../assets/insta.png"

export default function Portfolio() {
    return (
        <div id="portfolio">
            <h2 className="sub-title">My Projects</h2>
            <div className="work-list">
                <div className="work">
                    <img src={Anime}></img>
                    <div className="layer">
                        <h3>Anime tracker APP</h3>
                        <p>Ever wondered which anime you have watched? Well look no further here you can add your own
                            description of anime and know what which anime you have watched. Add your own notes about the
                            anime and your thoughts.</p>
                        <a href="https://hidden-plains-41220.herokuapp.com/animes">link</a>
                        <a href="https://github.com/dvbernardo97/Project2">GitHub</a>
                    </div>
                </div>
                <div className="work">
                    <img src={Pixel}></img>
                    <div className="layer">
                        <h3>Pixel Perfect</h3>
                        <p>Ever wanted to see the skeleton from instagram well here you go. This app consists fo django,
                            python, and materialize as the framework to make this app. You are able to post pictures, make
                            your own login and so on.</p>
                        <a href="https://shielded-citadel-06625.herokuapp.com/posts/">link</a>
                        <a href="https://github.com/Pixel-Perfect1/PixelPerfect">Github</a>
                    </div>
                </div>
            </div>
            {/* <a href="#" className="btn">See More</a> */}
        </div>
    )
}