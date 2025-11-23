import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported
import about from '../assets/about.jpg';
import '../styles/About.css'; // Import external CSS

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center heading">
          <h2 data-aos="fade-up">About Us</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            We are a passionate team dedicated to delivering exceptional web solutions.
          </p>
        </div>

        {/* Content Section */}
        <div className="content">
          {/* Image Section */}
          <div data-aos="fade-right" className="image-container">
            <img src={about} alt="About Us" className="about-image" />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left" className="text-container">
            <h3>Who We Are</h3>
            <p>
              We are a team of dedicated professionals who are passionate about creating innovative web solutions that help businesses grow and succeed in the digital world.
            </p>
            <ul className="feature-list">
              {["Expert Development Team", "Quality Focused Solutions", "24/7 Support Available"].map((item, index) => (
                <li key={index} className="feature-item">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
