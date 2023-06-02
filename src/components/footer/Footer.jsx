import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <div className="contactR">
                <Link to='#' onClick={()=>{window.location= 'mailto:jerome.dautreme@live.fr'}} className="contactR__reseaux"><RiMailSendLine className='bx bx-envelope' /></Link>
                <NavLink target='blank' to='https://github.com/jeromeDaut' className="contactR__reseaux"><SiGithub/></NavLink>
                <NavLink target='blank' to='https://www.linkedin.com/in/j%C3%A9r%C3%B4me-dautr%C3%AAme-612168156/' className="contactR__reseaux"><SiLinkedin className='bx bxl-linkedin' /></NavLink>
            </div>
        </>
    );
};

export default Footer;