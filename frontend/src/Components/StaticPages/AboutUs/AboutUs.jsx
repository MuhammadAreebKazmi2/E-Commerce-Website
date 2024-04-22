import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="titlee">About Us</h1>
      <div className="contenta">
        <p>
          HU Dukaan is an e-commerce website made specifically to serve the Habib University student community. Our mission is to provide a convenient and reliable platform for students to buy and sell products and services.
        </p>
        <h2>Our Story</h2>
        <p>
          HU Dukaan E-commerce website was founded in 2023 by a group of Habib University students who wanted to create a more connected and sustainable campus community. We started with a simple idea: to make it easier for students to buy and sell textbooks, electronics, and other essentials.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Community: We believe in creating a vibrant and inclusive campus community where students can connect and collaborate.</li>
          <li>Sustainability: We are committed to promoting sustainable practices and reducing waste on campus.</li>
          <li>Transparency: We strive to be open, honest, and transparent in all our dealings with our customers and partners.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;