// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  // Animation for the hero section
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  // Animation for the CTA button
  const buttonAnimation = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 800,
  });

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">CommunionHub</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <animated.section className="hero-section" style={heroAnimation}>
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <animated.div style={buttonAnimation}>
          <Link to="/events">
            <button className="cta-button">Explore Events</button>
          </Link>
        </animated.div>
      </animated.section>
    </div>
  );
};

export default Home;