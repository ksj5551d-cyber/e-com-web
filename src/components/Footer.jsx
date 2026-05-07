import React from 'react';
import { Globe, Share2, Info, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', background: '#ffffffff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: '#1f1f1f' }}>Useful Links</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '2' }}>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: '#1f1f1f' }}>Categories</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '2' }}>
                    <li>Vegetables & Fruits</li>
                    <li>Dairy & Breakfast</li>
                    <li>Munchies</li>
                    <li>Cold Drinks & Juices</li>
                    <li>Instant & Frozen Food</li>
                </ul>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '2' }}>
                    <li>Tea, Coffee & Health Drinks</li>
                    <li>Bakery & Biscuits</li>
                    <li>Sweet Tooth</li>
                    <li>Atta, Rice & Dal</li>
                    <li>Chicken, Meat & Fish</li>
                </ul>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: '#1f1f1f' }}>Follow us</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <Globe size={24} color="#1f1f1f" />
              <Share2 size={24} color="#1f1f1f" />
              <Info size={24} color="#1f1f1f" />
              <Users size={24} color="#1f1f1f" />
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© Blinkit Commerce Private Limited, 2016-2026</p>
          </div>
          <div>
             <h3 style={{ marginBottom: '1.5rem', color: '#1f1f1f' }}>Download App</h3>
             <div className="flex flex-column gap-1">
                <img src="https://thf.bing.com/th/id/OIP.HHa0kPTSyJRUaeRBG9YgMwHaHa?w=192&h=192&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="App Store" style={{ height: '40px', objectFit: 'contain' }} />
                <img src="https://thf.bing.com/th/id/OIP.iaolHeeQ2xsqp8CrZ9uREgHaEa?w=192&h=115&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="Play Store" style={{ height: '40px', objectFit: 'contain' }} />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
