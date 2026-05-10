import React from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header" style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container flex align-center justify-between" style={{ height: 'var(--header-height)' }}>
        {/* Logo & Location */}
        <div className="flex align-center gap-6">
          <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Blinkit-yellow-app-icon.png" 
              alt="Blinkit Logo" 
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>
          
          <div className="location-selector flex align-center gap-2" style={{ borderLeft: '1px solid #eee', paddingLeft: '1.5rem', cursor: 'pointer' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#000' }}>Delivery in 10 minutes</div>
              <div className="flex align-center gap-1" style={{ fontSize: '0.75rem', color: '#666' }}>
                Gurugram, Haryana, India <ChevronDown size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container flex align-center" style={{ flex: 1, margin: '0 4rem', background: '#f8f9fa', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', border: '1px solid #eee' }}>
          <Search size={18} color="#666" />
          <input 
            type="text" 
            placeholder='Search "milk", "bread", "snacks"' 
            style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '0.8rem', width: '100%', fontSize: '0.9rem', color: '#333' }}
          />
        </div>

        {/* Actions */}
        <div className="flex align-center gap-4">
          <div style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', color: '#333' }}>Login</div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn flex align-center gap-2" 
            style={{ 
              padding: '0.8rem 1.5rem', 
              borderRadius: '0.75rem', 
              backgroundColor: '#0c831f', 
              color: '#fff', 
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700
            }}
          >
            <ShoppingCart size={20} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem' }}>My Cart</div>
            </div>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
