import { Link } from 'react-router-dom';

import s from "./NavBar.module.css"

function NavB () {
    return (
        <div className={s.Navbar}>
            <Link to="/Home" className={s.link}>Home</Link>
            <Link to="/About" className={s.link}>About Me</Link>
            <Link to="/Contact" className={s.link}>Contact</Link>
        </div>
    )
};

export default NavB;
