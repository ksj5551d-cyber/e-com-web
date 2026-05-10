import React from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Left: Logo & Location */}
        <div className="flex align-center">
          <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ backgroundColor: '#f7d117', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 10px rgba(247, 209, 23, 0.2)' }}>
              <ShoppingCart size={22} color="#000" fill="#000" />
            </div>
            <span style={{ fontWeight: 900, fontSize: '1.6rem', color: '#000', letterSpacing: '-1.5px', display: 'flex', alignItems: 'center' }}>
              QuickMart
            </span>
          </Link>
          
          <div className="location-selector">
            <div className="flex-column">
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#000', lineHeight: 1.2 }}>Delivery in 10 minutes</div>
              <div className="flex align-center" style={{ fontSize: '0.75rem', color: '#666', gap: '4px' }}>
                Gurugram, Haryana <ChevronDown size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="search-container">
          <Search size={18} color="#666" />
          <input 
            type="text" 
            className="search-input"
            placeholder='Search "milk", "bread", "snacks"' 
          />
        </div>

        {/* Right: Actions */}
        <div className="flex align-center gap-6">
          <div style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', color: '#333' }}>Login</div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn" 
            style={{ 
              padding: '0.8rem 1.75rem', 
              borderRadius: '0.75rem', 
              backgroundColor: '#0c831f', 
              color: '#fff', 
              fontWeight: 700,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 20px rgba(12, 131, 31, 0.15)'
            }}
          >
            <ShoppingCart size={20} />
            My Cart
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
