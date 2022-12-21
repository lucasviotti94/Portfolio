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
import { motion } from "framer-motion" 
import { useState } from "react";

import s from "./Education.module.css"

const Education = () => {    
    const [move, setMove ] = useState(false)
    const [nodeMove, setNodeMove ] = useState(false)
    const [htmlMove, setHtmlMove ] = useState(false)
    const [cssMove, setCssMove ] = useState(false)
    const [reactMove, setReactMove ] = useState(false)
    const [jsMove, setJsMove ] = useState(false)
    const [reduxMove, setReduxMove ] = useState(false)
    const [sequeMove, setSequeMove ] = useState(false)
    const [exprMove, setExprMove ] = useState(false)
    const [postMove, setPostMove ] = useState(false)
    const [materialMove, setMaterialMove ] = useState(false)
    const [bootsMove, setBootsMove ] = useState(false)
    const [gitMove, setGitMove ] = useState(false)
    const [slackMove, setSlackMove ] = useState(false)
    const [discordMove, setDiscordMove ] = useState(false)

    return (
        <section className={s.educationHeader} id="education">
            <div className={s.text}>Im Full Stack Web Developer</div>     
            <div className={s.henry}>
                <div className={s.imgCertificado}>
                    <h1> Certificate </h1>
                    <motion.img 
                        src={pic1} 
                        alt='pic'
                        animate={{scale: move ? 1.1 : 0.9}} 
                        transition={{type: "spring", duration: 0.1}}
                        onClick={() => {
                            setMove(!move)
                        }}
                        />
                </div>                
                <div className={s.skills}>
                    <h1> Tecnologies learned</h1>
                    <div className={s.firstRow}>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}} animate={{scale: nodeMove ? 1.5 : 1,}} onHoverStart={() => {setNodeMove(!nodeMove)}}>
                            <IoLogoNodejs size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)" , borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: nodeMove ? "green" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: htmlMove ? 1.5 : 1}} onHoverStart={() => {setHtmlMove(!htmlMove)}}>
                            <IoLogoHtml5 size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: htmlMove ? "orange" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: cssMove ? 1.5 : 1}} onHoverStart={() => {setCssMove(!cssMove)}}>
                            <IoLogoCss3 size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: cssMove ? "rgba(46,109,175,1)" : ""}}/>
                        </motion.div> 
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: reactMove ? 1.5 : 1}} onHoverStart={() => {setReactMove(!reactMove)}}>
                            <IoLogoReact size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: reactMove ? "rgba(38,170,204,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: jsMove ? 1.5 : 1}} onHoverStart={() => {setJsMove(!jsMove)}}>
                            <IoLogoJavascript size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: jsMove ? "rgba(246,255,27,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: reduxMove ? 1.5 : 1}} onHoverStart={() => {setReduxMove(!reduxMove)}}>
                            <SiRedux size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: reduxMove ? "rgba(171,67,153,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: sequeMove ? 1.5 : 1}} onHoverStart={() => {setSequeMove(!sequeMove)}}>
                            <SiSequelize size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: sequeMove ? "rgba(79,153,215,1)" : ""}}/>                        
                        </motion.div>
                    </div>
                    <div className={s.secondRow}>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: exprMove ? 1.5 : 1}} onHoverStart={() => {setExprMove(!exprMove)}}>
                            <SiExpress size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: exprMove ? "white" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: postMove ? 1.5 : 1}} onHoverStart={() => {setPostMove(!postMove)}}>
                            <SiPostgresql size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: postMove ? "rgba(32,99,156,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: materialMove ? 1.5 : 1}} onHoverStart={() => {setMaterialMove(!materialMove)}}>
                            <SiMaterialui size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: materialMove ? "rgba(61,166,213,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: bootsMove ? 1.5 : 1}} onHoverStart={() => {setBootsMove(!bootsMove)}}>
                            <SiBootstrap size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: bootsMove ? "rgba(148,58,189,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: gitMove ? 1.5 : 1}} onHoverStart={() => {setGitMove(!gitMove)}}>
                            <SiGithub size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: gitMove ? "rgba(130,130,130,1)" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: slackMove ? 1.5 : 1}} onHoverStart={() => {setSlackMove(!slackMove)}}>
                            <SiSlack size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: slackMove ? "white" : ""}}/>
                        </motion.div>
                        <motion.div style={{ margin:"1%"}} transition={{type: "spring", duration: 1.5}}animate={{scale: discordMove ? 1.5 : 1}} onHoverStart={() => {setDiscordMove(!discordMove)}}>
                            <SiDiscord size="90px" style={{boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(6.4px)", WebkitBackdropFilter: "blur(6.4px)", borderRadius:"10%", background: "rgba(255, 255, 255, 0.1)", color: discordMove ? "rgba(66,82,251,1)" : ""}}/>
                        </motion.div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Education;