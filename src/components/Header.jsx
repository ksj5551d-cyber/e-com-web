import React from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header shadow">
      <div className="container flex align-center justify-between" style={{ height: 'var(--header-height)' }}>
        {/* Logo & Location */}
        <div className="flex align-center gap-2">
          <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://blinkit.com/d6906236b2880c592e82.png" 
              alt="Blinkit Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
          </Link>
          
          <div className="location-selector flex align-center gap-1" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem', cursor: 'pointer' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Delivery in 10 minutes</div>
              <div className="flex align-center gap-1" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Gurugram, Haryana, India <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container flex align-center" style={{ flex: 1, margin: '0 3rem', background: 'var(--bg-gray)', padding: '0.6rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border)' }}>
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder='Search "milk"' 
            style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '0.8rem', width: '100%', fontSize: '0.95rem' }}
          />
        </div>

        {/* Actions */}
        <div className="flex align-center gap-2">
          <div style={{ padding: '0.5rem 1.5rem', cursor: 'pointer', fontWeight: 500 }}>Login</div>
          
          <button className="btn btn-success flex align-center gap-1" style={{ padding: '0.7rem 1.2rem', borderRadius: '0.5rem' }}>
            <ShoppingCart size={20} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>My Cart</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
