import React, { useEffect, useState } from 'react';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains('dark');
    setDarkMode(isDark);

    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  const heading = "About Me";

  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: animate
          ? darkMode
            ? '#1f1f1f'
            : '#f8f9fa'
          : 'transparent',
        color: darkMode ? '#f1f1f1' : '#333',
        transition: 'background-color 1s ease, color 1s ease',
      }}
    >
      <h2 style={styles.heading}>
        {heading.split('').map((char, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(-30px)',
              transition: `all 0.5s ease ${index * 80}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>

      <p style={styles.text}>
        I'm a <strong>dedicated Laravel Backend Developer</strong> with 2 years of hands-on experience.<br /><br />
        I specialize in building <strong>robust web applications</strong> and managing complex databases.<br /><br />
        Currently working at <strong>Army Medical College</strong>, I've developed their <strong>CMS</strong>, exam management software <strong>Marks</strong>, and <strong>accounting system</strong>.<br /><br />
        I also manage and maintain their official websites with performance and scalability in mind.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    borderRadius: '10px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.7',
    textAlign: 'center',
  },
};

export default About;
