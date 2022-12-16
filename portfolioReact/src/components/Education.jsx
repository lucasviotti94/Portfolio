import s from "./Education.module.css"
import pic1 from "../assets/certificate.png"
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiDiscord } from "react-icons/si";


const Education = () => {    

    return (
        <section className={s.main} id="education">
            {/* <div className={s.fixer}></div> */}
            <div className={s.text}>Im Full Stack Web Developer</div>     
            <div className={s.henry}>
                <div className={s.imgCertificado}>
                    <img src={pic1} alt='pic'/>
                </div>                
                <div className={s.skills}>
                    <h1> Tecnologies learned</h1>
                    <div className={s.firstRow}>
                        <IoLogoNodejs size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <IoLogoHtml5 size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <IoLogoCss3 size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <IoLogoReact size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <IoLogoJavascript size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiRedux size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiSequelize size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>                        
                    </div>
                    <div className={s.secondRow}>
                        <SiExpress size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiPostgresql size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiMaterialui size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiBootstrap size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiGithub size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiSlack size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                        <SiDiscord size="90px" style={{boxShadow:"2px 2px 2px 2px", borderRadius:"10%", margin:"1%", backgroundColor:"white"}}/>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Education;