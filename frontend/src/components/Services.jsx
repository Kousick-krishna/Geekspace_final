import { useEffect } from 'react';
import AOS from 'aos';
import '../styles/services.css';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Modern and responsive websites built with the latest technologies",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that engage and convert",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your business",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 data-aos="fade-up">Our Services</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            We offer a wide range of digital services to help your business grow
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
