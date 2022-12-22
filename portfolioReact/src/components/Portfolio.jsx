import React from 'react'
import ReactPlayer from 'react-player'

import urlvideo from "../assets/foodapi.mp4"
import pic1 from "../assets/deployFinal.png"

import s from "./Portfolio.module.css"

const Portfolio = () => {    

    return (
        <div className={s.main} id="portfolio">
            <div className={s.title}>Projects</div>
            <div className={s.projects}>
                <div className={s.project1}>
                    <h1 className={s.topText}>Food API</h1>
                    <div className={s.video}>
                        <ReactPlayer url={urlvideo} controls/>
                    </div>
                </div>
                <div className={s.project2}>
                    <h1 className={s.topText}>Final Project</h1>
                    <div className={s.page}>
                        <img src={pic1} alt="pic1"/>
                    </div>
                    <a href="https://font-pf.vercel.app" className={s.deploy}>Click here to see the project.</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;