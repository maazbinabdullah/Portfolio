import React, { useEffect, useState } from 'react';

const projectList = ['CMS', 'Marks', 'Accounts', 'Ecommerce Websites', 'Portfolio', 'POS', 'ERP'];

const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.cardContainer}>
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease ${index * 150}ms`,
            }}
          >
            <h3>{project}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    padding: '60px 20px',
    overflow: 'hidden',
    background: 'linear-gradient(-45deg, #2c3e50, #34495e, #2c3e50, #1c2833)', // Darker gradient colors
    backgroundSize: '400% 400%',
    animation: 'gradientMove 15s ease infinite',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)', // Darker overlay for a more dramatic effect
    zIndex: 0,
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '40px',
    position: 'relative',
    zIndex: 1,
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px 30px',
    borderRadius: '12px',
    minWidth: '160px',
    textAlign: 'center',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)', // Slightly stronger shadow for contrast
    backdropFilter: 'blur(8px)',
    color: '#fff',
  },
};

// Add this to your global CSS or inject via <style>
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(styleTag);

export default Projects;
