import { useState, useEffect } from "react"

import pic1 from "../assets/portfolio-image.png"

import s from "./LandingSection.module.css"



const LandingSection = () => {
    
    // const [nameClass, setNameClass] = useState('')

    useEffect(() => {
        
      }, []);

    return (
        <section className={s.home} id="/">
            <div className={s.imgLaptop}>
                <img src={pic1} alt=""/> 
            </div>
            <div className={s.topText}>Hi! Im Lucas Viotti</div>
            <div className={s.secondText}>Just scroll down :)</div>
            <section id="home" className={s.section1}>                
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={s.svgs}>
                    <path fill="grey" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={s.shapeFill}></path>
                </svg>
            </section>
        </section>
    )
}

export default LandingSection;