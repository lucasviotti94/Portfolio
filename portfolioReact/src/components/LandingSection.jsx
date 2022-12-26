import { motion } from "framer-motion" 
import { useEffect, useState } from "react"
import s from "./LandingSection.module.css"



const LandingSection = () => {
    const [move, setMove] = useState(false)

    useEffect(() => {
        setMove(true)
    }, [])
    return (
        <section className={s.landingHeader}>
            <motion.div 
                className={s.topText}
                transition={{type: "spring", duration: 2}}
                animate={{x: move && 1400}}                
                > Hi! Im Lucas Viotti
            </motion.div>
            <motion.div 
                className={s.secondText}
                transition={{type: "spring", duration: 3}}
                animate={{x: move && 1400}}  
                >Im from Argentina.
            </motion.div>
            <motion.div 
                className={s.secondText}
                transition={{type: "spring", duration: 4}}
                animate={{x: move && 1400}}  
                >Im 28.
            </motion.div>
            <motion.div
                className={s.secondText}
                transition={{type: "spring", duration: 5}}
                animate={{x: move && 1400}}  
                >I am currently looking for a job ;)
            </motion.div>
            <motion.div 
                className={s.secondText}
                transition={{type: "spring", duration: 6}}
                animate={{x: move && 1400}}  
                >Down below you can know more about me
            </motion.div>
        </section>
    )
}

export default LandingSection;