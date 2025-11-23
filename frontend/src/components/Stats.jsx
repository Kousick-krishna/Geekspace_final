import React, { useEffect, useState, useRef } from 'react';
import '../styles/stats.css';

const Stats = () => {
  const [animate, setAnimate] = useState(false);
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hardWorkers, setHardWorkers] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const animateCounter = (setter, targetValue) => {
        let current = 0;
        const increment = Math.ceil(targetValue / 100);
        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(interval);
          }
          setter(current);
        }, 20);
      };

      animateCounter(setHappyClients, 50);
      animateCounter(setProjects, 60);
      animateCounter(setHardWorkers, 10);
    }
  }, [animate]);

  return (
    <section id="stats" ref={statsRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {/* Happy Clients */}
          <div className="stats-card">
            <div className="stats-icon">😊</div>
            <h3 className="stats-number">{happyClients}</h3>
            <p className="stats-label">Happy Clients</p>
          </div>

          {/* Projects */}
          <div className="stats-card">
            <div className="stats-icon">📂</div>
            <h3 className="stats-number">{projects}</h3>
            <p className="stats-label">Projects</p>
          </div>

          {/* Hard Workers */}
          <div className="stats-card">
            <div className="stats-icon">👷</div>
            <h3 className="stats-number">{hardWorkers}</h3>
            <p className="stats-label">Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
