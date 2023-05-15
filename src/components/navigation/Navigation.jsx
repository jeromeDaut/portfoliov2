import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowUp } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldShowScrollButton = scrollTop > 0;
      setShowScrollButton(shouldShowScrollButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="header">
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`scroll-button ${showScrollButton ? 'show' : ''}`} onClick={handleScrollToTop}>
        <FaArrowUp />
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