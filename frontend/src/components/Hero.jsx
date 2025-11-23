import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from "../assets/hero.png";
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Hero.css'; // Importing the CSS file

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div data-aos="fade-up" className="hero-text">
            <h1 className="hero-title">
              We offer modern solutions for growing your business
            </h1>
            <p className="hero-subtitle">
              We are a team of talented developers and designers
            </p>
            <ScrollLink to="contact" smooth={true} duration={500} className="hero-button">
              Get Started
            </ScrollLink>
          </div>
          <div data-aos="zoom-in" className="hero-image-container">
            <img src={hero} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
