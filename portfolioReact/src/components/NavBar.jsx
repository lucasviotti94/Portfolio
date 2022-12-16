import s from "./NavBar.module.css"
import { Link } from "react-scroll";
import { useState } from "react";

const NavB = () => {

    const [homeStyle, setHomeStyle] = useState(true);
    const [educationStyle, setEducationStyle] = useState(false);
    const [portfolioStyle, setPortfolioStyle] = useState(false);
    const [contactStyle, setContactStyle] = useState(false);

    const homeScroll = () => {
        if (window.scrollY <= 550) {
            setHomeStyle(true)
          } else {
            setHomeStyle(false);
          }
    } 

    const educationScroll = () => {
        if (window.scrollY >= 550 && window.scrollY <= 1200) {
            setEducationStyle(true);
          } else {
            setEducationStyle(false);
          }
    } 

    const portfolioScroll = () => {
        if (window.scrollY >= 1200 && window.scrollY <= 1750) {
            setPortfolioStyle(true);
          } else {
            setPortfolioStyle(false);
          }
    } 
    
    const contactScroll = () => {
        if (window.scrollY >= 1750) {
            setContactStyle(true);
          } else {
            setContactStyle(false);
          }
    } 

    window.addEventListener("scroll", homeScroll)
    window.addEventListener("scroll", educationScroll)
    window.addEventListener("scroll", portfolioScroll)
    window.addEventListener("scroll", contactScroll)    
   
    return (
        <section className={s.header}>   
            <nav>
                <ul className={s.navBar}>                    
                    <li className={homeStyle === true ? s.linkActive : s.link}>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                    </li>
                    <li className={educationStyle === true ? s.linkActive : s.link}>
                        <Link to="education" spy={true} smooth={true} offset={50} duration={500} >Education</Link>
                    </li>
                    <li className={portfolioStyle === true ? s.linkActive : s.link}>
                        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                    </li>
                    <li className={contactStyle === true ? s.linkActive : s.link}>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </li> 
                </ul>
            </nav>         
           
        </section>
    )
};

export default NavB;
