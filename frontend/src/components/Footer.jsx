import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple text-white text-center py-4">
      <p>&copy; 2025 BookStore. All rights reserved.</p>
      <p className="mb-0">Follow us on social media:</p>
      <div className="social-icons">
        <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
