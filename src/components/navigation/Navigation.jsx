import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowUp } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

    // Array of navigation item
  const navItems = [
    { id: 1, text: 'A propos', link: '#about' },
    { id: 2, text: 'Compétences', link: '#skills' },
    { id: 3, text: 'Projets', link: '#project' },
    { id: 4, text: 'Contact', link: '#contact' }
  ];
  
// Define the scroll event handler
  useEffect(() => {
    const handleScroll = () => {
       // Get the current scroll position using window.scrollY
      const scrollTop = window.scrollY;
       // Check if the scroll position is greater than 0
      const shouldShowScrollButton = scrollTop > 0;
      // Update the state variable showScrollButton
      setShowScrollButton(shouldShowScrollButton);
    };
    // Add the scroll event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the scroll event listener when the component is unmounted
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
    {/* Menu toggle for mobile */} 
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    {/* Scroll button */}
      <div className={`scroll-button ${showScrollButton ? 'show' : ''}`} onClick={handleScrollToTop}>
        <FaArrowUp />
      </div>

       {/* Navigation menu */}
      <div className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="header__nav-list">
        {/* Render navigation items */}
          {navItems.map(item => (
            <li key={item.id} className="header__nav-item">
              {/* HashLink for smooth scrolling */}
              <HashLink smooth to={item.link} title={item.text} className="header__nav-link" onClick={handleLinkClick}>
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