import React from 'react';

const Contacts = () => (
  <section
    className="section"
    style={{
      background: 'var(--card-bg)',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <form
      action="https://formspree.io/f/xnndqzzk"
      method="POST"
      style={{
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '12px' }}>Contact Me</h2>

      <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
      <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
      <textarea name="message" rows="4" placeholder="Message" required style={inputStyle}></textarea>

      <button type="submit" style={buttonStyle}>Send</button>
    </form>
  </section>
);

const inputStyle = {
  padding: '10px',
  border: '1px solid var(--text)',
  borderRadius: '6px',
  background: 'var(--bg)',
  color: 'var(--text)',
  fontSize: '14px',
  resize: 'none',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '14px',
};

export default Contacts;
