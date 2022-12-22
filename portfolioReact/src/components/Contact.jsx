import s from "./Contact.module.css"
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { IconContext } from "react-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


const Contact = () => {    
    const popover = (
        <Popover id="popover-basic" 
            style={{
                marginLeft: "1%",
                transition: "2s ease", 
                backgroundColor: "#0a323d", 
                fontFamily: "'Cutive Mono', monospace", 
                border: "1%",
                boxShadow: "3px 3px 6px 2px black",
                width: "370px"
                }}>
          <Popover.Header as="h2" style={{margin: "4%"}}>viottilucas16@gmail.com</Popover.Header>
        </Popover>
      );
      
    return (
        <section className={s.main} id="contact">
            <div className={s.container}>
                <h1 className={s.title}> Contact with me</h1>
                <hr/>
                <div className={s.wrapper}>
                    <a href="https://www.linkedin.com/in/lucas-viotti-4b7b05233/">
                        <IconContext.Provider value={{ color: "black", size: "5em"}}>
                            <AiFillLinkedin/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.instagram.com/viottil/">
                        <IconContext.Provider value={{ color: "black", size: "5em"}}>
                            <SiInstagram >Instagram</SiInstagram>
                        </IconContext.Provider>
                    </a>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button variant="success" style={{backgroundColor: "#0e4352", border: "none"}}>
                            <IconContext.Provider value={{size: "5em"}}>
                                <SiGmail />
                            </IconContext.Provider>                        
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
        </section>
    )
}

export default Contact;