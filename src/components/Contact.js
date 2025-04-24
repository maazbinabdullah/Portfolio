import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains('dark');
    setDarkMode(isDark);

    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={contactRef}
      style={{
        ...styles.section,
        background: darkMode ? '#0f0f0f' : '#f5f5f5',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={styles.bgBlurOne}></div>
      <div style={styles.bgBlurTwo}></div>

      <div
        style={{
          ...styles.card,
          background: darkMode ? 'rgba(42,42,42,0.9)' : 'rgba(255,255,255,0.9)',
        }}
      >
        <h2 style={styles.heading}>Connect With Me!</h2>
        <p style={styles.subtext}>I’d love to connect! Feel free to reach out via email or phone.</p>
        <div style={styles.contactInfo}>
          <p>
            📧 Email: <a href="mailto:sheikhmaaz67@gmail.com" style={styles.link}>sheikhmaaz67@gmail.com</a>
          </p>
          <p>
            📱 Phone: <span style={styles.text}>+92-334-1103326</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    padding: '100px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  card: {
    borderRadius: '16px',
    padding: '40px 30px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 0 30px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    zIndex: 2,
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subtext: {
    marginBottom: '30px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#888',
  },
  contactInfo: {
    fontSize: '18px',
    lineHeight: '1.8',
    textAlign: 'center',
  },
  link: {
    color: '#4db8ff',
    textDecoration: 'none',
    fontWeight: '500',
  },
  text: {
    color: '#777',
  },
  bgBlurOne: {
    position: 'absolute',
    top: '-100px',
    left: '-100px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, #84fab0, #8fd3f4)',
    opacity: 0.2,
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 0,
  },
  bgBlurTwo: {
    position: 'absolute',
    bottom: '-100px',
    right: '-100px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, #ffecd2, #fcb69f)',
    opacity: 0.2,
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 0,
  }
};

export default Contact;
