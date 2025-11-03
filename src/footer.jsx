import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} My Simple React Website</p>
    </footer>
  );
}

export default Footer;

