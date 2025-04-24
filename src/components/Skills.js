import React, { useEffect, useState } from 'react';
import { SiLaravel, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
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

  const skillData = [
    { name: 'Laravel', level: 80, color: '#FF2D20', icon: <SiLaravel size={32} color="#FF2D20" /> },
    { name: 'React', level: 60, color: '#61DAFB', icon: <SiReact size={32} color="#61DAFB" /> },
    { name: 'HTML5', level: 85, color: '#e34c26', icon: <SiHtml5 size={32} color="#e34c26" /> },
    { name: 'CSS3', level: 75, color: '#264de4', icon: <SiCss3 size={32} color="#264de4" /> },
  ];

  return (
    <section
      style={{
        padding: '60px 20px',
        background: darkMode ? '#1e1e1e' : '#f9f9f9',
        color: darkMode ? '#f1f1f1' : '#333',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Tech Stack</h2>

      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: darkMode ? '#333' : '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {skillData.map((skill, index) => (
          <div key={index} style={{ marginBottom: '30px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {skill.icon}
              <strong>{skill.name}</strong>
            </div>
            <div
              style={{
                height: '10px',
                borderRadius: '6px',
                background: darkMode ? '#444' : '#e0e0e0',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                  transition: 'width 1s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
