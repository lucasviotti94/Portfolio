import s from "./Education.module.css"
import pic1 from "../assets/certificate.png"
const Education = () => {    

    return (
        <div className={s.main} id="education">
            <div className={s.text}>Im Full Stack Web Developer</div>     
            <div className={s.henry}>
                <p>Here is my certificate.</p>
                <div className={s.imgCertificado}>
                    <img src={pic1} alt='pic'/>
                </div>                
            </div>
        </div>
    )
}

export default Education;