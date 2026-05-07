import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', marginTop: '4rem', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>E-COM</h3>
            <p style={{ color: 'var(--text-muted)' }}>Premium shopping experience with a focus on quality and style.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Shop</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
              <li>Electronics</li>
              <li>Home & Decor</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Newsletter</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="text" placeholder="Email" style={{ 
                padding: '0.5rem', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border)',
                borderRadius: '4px',
                color: 'white'
              }} />
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; 2026 E-COM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
