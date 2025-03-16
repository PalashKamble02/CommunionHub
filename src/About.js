// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <header>
        <div className="logo">CommunionHub</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <h1>About CommunionHub</h1>
      <p>
        CommunionHub is a platform dedicated to connecting people of all faiths and interests through meaningful events and community support. Our mission is to foster unity, understanding, and collaboration among diverse communities.
      </p>
      <p>
        Whether you're looking to participate in religious gatherings, social events, or charity initiatives, CommunionHub provides a space for everyone to come together and make a difference.
      </p>
    </div>
  );
};

export default About;