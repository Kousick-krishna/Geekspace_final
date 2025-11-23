import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navbar.css'; // Importing the CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true); // Ensure navbar is visible on load
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <ScrollLink to="home" smooth={true} duration={500} className="brand">
              GeekSpace
            </ScrollLink>
          </div>

          <div className="nav-links">
            <ScrollLink to="home" smooth={true} duration={500} className="nav-item">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-item">
              About
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className="nav-item">
              Services
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} className="nav-item">
              Portfolio
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-item">
              Contact
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-button">
              Get Started
            </ScrollLink>
          </div>

          <div className="mobile-menu">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav">
          <ScrollLink to="home" smooth={true} duration={500} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            About
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            Services
          </ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            Portfolio
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

