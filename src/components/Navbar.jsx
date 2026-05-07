import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass sticky top-0 z-50 py-4">
      <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <motion.div
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px' }}></div>
          </motion.div>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>E-COM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md-flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Search size={20} className="cursor-pointer" />
            <Link to="/cart" style={{ color: 'inherit' }}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={24} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'var(--primary)',
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>0</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md-hidden" style={{ display: 'none' }}>
           <Menu size={24} />
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: var(--text-main);
        }
        nav {
           padding: 1rem 0;
           position: sticky;
           top: 0;
           width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
