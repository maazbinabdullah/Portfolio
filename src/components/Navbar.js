import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle body class
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  // Function to trigger CV download
  const downloadCV = () => {
    // Assuming you have a CV file named "CV_Maaz_Sheikh.pdf"
    const link = document.createElement('a');
    link.href = 'MaazBinAbdullah.pdf'; // Update this with the actual file path
    link.download = 'MaazBinAbdullah.pdf'; // Name of the file when downloaded
    link.click();
  };

  return (
    <nav style={{ ...styles.navbar, animation: 'swipeIn 1s ease-in' }}>
      <ul style={styles.navList}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} style={styles.toggleButton}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
        <li>
          <button onClick={downloadCV} style={styles.downloadButton}>
            📥 CV
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'var(--nav-bg)',
    padding: '15px 30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
    position: 'relative', // Ensure position for the animation
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    gap: '30px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text)',
    fontWeight: 600,
  },
  toggleButton: {
    padding: '6px 12px',
    background: 'none',
    border: '1px solid var(--text)',
    color: 'var(--text)',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  // Style for Download CV button with downward arrow
  downloadButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 650,
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

// Add keyframes for swipeIn animation
const swipeInAnimation = `
  @keyframes swipeIn {
    0% {
      transform: translateX(-100%); /* Start off-screen to the left */
    }
    100% {
      transform: translateX(0); /* End at normal position */
    }
  }
`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(swipeInAnimation, styleSheet.cssRules.length);

export default Navbar;
