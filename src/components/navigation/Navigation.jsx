import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <header className="header">
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item"><HashLink to="#about"  className="header__nav-link">A propos</HashLink></li>
            <li className="header__nav-item"><HashLink to="#skills"  className="header__nav-link">Compétences</HashLink></li>
            <li className="header__nav-item"><HashLink to="#project" className="header__nav-link">Projet</HashLink></li>
            <li className="header__nav-item"><HashLink to="#contact" className="header__nav-link">Contact</HashLink></li>
          </ul>
        </div>
      </header>
    )
};

export default Navigation;