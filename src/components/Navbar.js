import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle body dark mode class
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Download CV function
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'MaazBinAbdullah.pdf';
    link.download = 'MaazBinAbdullah.pdf';
    link.click();
  };

  // Inject styles for responsiveness and theming
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      :root {
        --nav-bg: #ffffff;
        --text-color: #222;
        --btn-bg: #007bff;
        --btn-text: #fff;
      }

      body.dark {
        --nav-bg: #1a1a1a;
        --text-color: #fff;
        --btn-bg: #0d6efd;
        --btn-text: #fff;
      }

      @keyframes swipeIn {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .navbar-container {
          padding: 10px;
        }

        .nav-list {
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .nav-list li {
          flex: 1 0 auto;
          text-align: center;
        }

        .toggle-btn,
        .download-btn {
          min-width: 80px;
          padding: 6px 10px;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <nav style={{ ...styles.navbar, animation: 'swipeIn 0.6s ease-in-out' }}>
      <div className="navbar-container" style={styles.container}>
        <ul className="nav-list" style={styles.navList}>
          {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} style={styles.link}>
                {section}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={styles.toggleButton}
              className="toggle-btn"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
          <li>
            <button
              onClick={downloadCV}
              style={{ ...styles.toggleButton, ...styles.downloadButton }}
              className="download-btn"
            >
              📥 CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'var(--nav-bg)',
    width: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '15px 30px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-color)',
    fontWeight: 600,
    fontSize: '16px',
    padding: '6px 10px',
    display: 'inline-block',
    borderRadius: '4px',
    transition: 'background 0.3s ease',
  },
  toggleButton: {
    padding: '6px 10px',
    border: '1px solid var(--text-color)',
    backgroundColor: 'transparent',
    color: 'var(--text-color)',
    borderRadius: '5px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '14px',
    minWidth: '80px',
    transition: 'all 0.3s ease',
  },
  downloadButton: {
    backgroundColor: 'var(--btn-bg)',
    color: 'var(--btn-text)',
    border: 'none',
  },
};

export default Navbar;
