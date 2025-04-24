import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.text}>© 2025 Maaz Sheikh</p>
    <div style={styles.links}>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaGithub style={styles.icon} /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/maaz-bin-abdullah-338416284/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaLinkedin style={styles.icon} /> LinkedIn
      </a>
    </div>
  </footer>
);

const styles = {
  footer: {
    background: 'linear-gradient(to right, #1e1e1e, #2c3e50)',
    color: 'white',
    padding: '30px 0',
    textAlign: 'center',
    marginTop: '40px',
  },
  text: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 500,
  },
  links: {
    marginTop: '12px',
  },
  link: {
    margin: '0 12px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  icon: {
    fontSize: '20px',
  },
};

export default Footer;
