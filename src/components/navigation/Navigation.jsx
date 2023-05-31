import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowUp } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const navItems = [
    { id: 1, text: 'A propos', link: '#about' },
    { id: 2, text: 'Compétences', link: '#skills' },
    { id: 3, text: 'Projets', link: '#project' },
    { id: 4, text: 'Contact', link: '#contact' }
  ];
  

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
    {/* for mobile ============== */}
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    {/* ==========================*/}
      <div className={`scroll-button ${showScrollButton ? 'show' : ''}`} onClick={handleScrollToTop}>
        <FaArrowUp />
      </div>
      <div className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="header__nav-list">
          {navItems.map(item => (
            <li key={item.id} className="header__nav-item">
              <HashLink smooth to={item.link} className="header__nav-link" onClick={handleLinkClick}>
                {item.text}
              </HashLink>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;