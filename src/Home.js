// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <div className="logo">CommunionHub</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <button className="cta-button">Explore Events</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;