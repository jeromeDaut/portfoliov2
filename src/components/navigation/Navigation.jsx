import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <HashLink smooth to="#about" className="header__nav-link" onClick={handleLinkClick}>
              A propos
            </HashLink>
            <hr />
          </li>
          <li className="header__nav-item">
            <HashLink smooth to="#skills" className="header__nav-link" onClick={handleLinkClick}>
              Compétences
            </HashLink>
            <hr />
          </li>
          <li className="header__nav-item">
            <HashLink smooth to="#project" className="header__nav-link" onClick={handleLinkClick}>
              Projets
            </HashLink>
            <hr />
          </li>
          <li className="header__nav-item">
            <HashLink smooth to="#contact" className="header__nav-link" onClick={handleLinkClick}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;