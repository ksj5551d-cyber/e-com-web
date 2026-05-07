import React from 'react';
import { ShoppingBasket, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCart = () => {
  // Mock state for demonstration
  const itemCount = 2;
  const totalPrice = 124;

  if (itemCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'calc(100% - 2rem)',
          maxWidth: '400px',
        }}
      >
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div className="btn-success" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderRadius: '0.8rem',
            boxShadow: '0 10px 25px rgba(12, 131, 31, 0.3)',
            cursor: 'pointer'
          }}>
            <div className="flex align-center gap-1">
              <ShoppingBasket size={24} color="white" />
              <div style={{ color: 'white' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>{itemCount} ITEMS</div>
                <div style={{ fontSize: '1rem', fontWeight: 800 }}>₹{totalPrice}</div>
              </div>
            </div>
            
            <div className="flex align-center gap-1" style={{ color: 'white', fontWeight: 700 }}>
              View Cart <ChevronRight size={20} />
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
