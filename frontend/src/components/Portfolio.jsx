import { useEffect, useState } from 'react';
import AOS from 'aos';
import portfolio1 from '../assets/ecom.jpg';
import portfolio2 from '../assets/mob.jpg';
import portfolio3 from '../assets/ui.jpg';
import '../styles/Portfolio.css'; // Import the separate CSS file

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    { title: "E-commerce Platform", category: "web", image: portfolio1 },
    { title: "Mobile App", category: "app", image: portfolio2 },
    { title: "Brand Identity", category: "design", image: portfolio3 }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" data-aos="fade-up">Portfolio</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Check out our latest work
          </p>
        </div>

        <div className="filter-buttons" data-aos="fade-up">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('web')} className={filter === 'web' ? 'active' : ''}>Web</button>
          <button onClick={() => setFilter('app')} className={filter === 'app' ? 'active' : ''}>App</button>
          <button onClick={() => setFilter('design')} className={filter === 'design' ? 'active' : ''}>Design</button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
