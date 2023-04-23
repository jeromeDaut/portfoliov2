import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="contactR">
                <Link to='#' onClick={()=>{window.location= 'mailto:jerome.dautreme@live.fr'}} className="contactR__reseaux"><i className='bx bx-envelope' ></i></Link>
                <NavLink target='blank' to='https://github.com/jeromeDaut' className="contactR__reseaux"><i className='bx bxl-github' ></i></NavLink>
                <NavLink target='blank' to='https://www.linkedin.com/in/j%C3%A9r%C3%B4me-dautr%C3%AAme-612168156/' className="contactR__reseaux"><i className='bx bxl-linkedin' ></i></NavLink>
            </div>
        </>
    );
};

export default Footer;