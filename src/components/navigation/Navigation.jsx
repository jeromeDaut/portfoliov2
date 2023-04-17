import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="header">
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item"><Link to="/" className="header__nav-link">A propos</Link></li>
            <li className="header__nav-item"><Link to="/" className="header__nav-link">Mes Projets</Link></li>
            <li className="header__nav-item"><Link to="/" className="header__nav-link">Contact</Link></li>
          </ul>
        </div>
      </header>
    )
};

export default Navigation;