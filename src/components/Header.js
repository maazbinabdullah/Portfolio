import React, { useEffect, useState } from 'react';

const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.overlay}></div>
      <div
        style={{
          ...styles.content,
          transform: animate ? 'translateY(0)' : 'translateY(-50px)',
          opacity: animate ? 1 : 0,
          transition: 'all 0.8s ease-out',
        }}
      >
        <h1>Maaz Bin Abdulla</h1>
        <p>Full Stack Developer | Backend Laravel | React.js </p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'relative',
    background: 'url("1.jpg") no-repeat center center/cover',
    color: 'white',
    padding: '40px 0',
    textAlign: 'center',
    minHeight: '300px',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
};

export default Header;
