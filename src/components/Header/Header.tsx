import React, { useState } from 'react';
import type { NavItem } from '../../types';
import './Header.css';
import { useMocks } from '../../hooks/useMocks';

import logoImg from '/images/logo/logo.svg';

interface HeaderProps {
  logo?: string;
  logoText?: string;
  navItems?: NavItem[];
}

const Header: React.FC<HeaderProps> = ({
  logo,
  logoText,
  navItems,
}) => {
  const { header: headerMock } = useMocks();
  const finalLogoText = logoText || headerMock.logoText;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img 
              src={logo || logoImg} 
              alt={finalLogoText} 
              className="header__logo-img" 
            />
          </div>

          {(navItems && navItems.length > 0) && (
            <>
              <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                <button
                  className="header__close"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <span></span>
                  <span></span>
                </button>
                <ul className="header__nav-list">
                  {navItems.map((item, index) => (
                    <li key={index} className="header__nav-item">
                      <a
                        href={item.href}
                        className="header__nav-link"
                        onClick={() => setIsMenuOpen(false)}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
