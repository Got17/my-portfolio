import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to apply dynamic backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = isScrolled ? 64 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="nav-logo" onClick={(e) => handleNavLinkClick(e, 'home')}>
          <span>⚡</span>
          <span>Souvanxay</span>
        </a>

        {/* Mobile Navigation Toggle Button */}
        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'nav-toggle-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation links & Drawer */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
            </li>
            <li>
              <a href="#experience" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
            </li>
            <li className="theme-toggle-container">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="4.22" x2="19.78" y2="5.64" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
