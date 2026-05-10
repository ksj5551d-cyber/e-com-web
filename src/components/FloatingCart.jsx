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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          position: 'fixed',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'calc(100% - 3rem)',
          maxWidth: '450px',
        }}
      >
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            borderRadius: '1.25rem',
            backgroundColor: '#0c831f',
            boxShadow: '0 20px 40px rgba(12, 131, 31, 0.25)',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div className="flex align-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <ShoppingBasket size={24} color="white" />
                <div style={{ 
                  position: 'absolute', 
                  top: '-8px', 
                  right: '-8px', 
                  background: '#f7d117', 
                  color: '#000', 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  width: '18px', 
                  height: '18px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {itemCount}
                </div>
              </div>
              <div style={{ color: 'white' }}>
                <div style={{ fontSize: '1rem', fontWeight: 800 }}>₹{totalPrice}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.8 }}>Incl. all taxes</div>
              </div>
            </div>
            
            <div className="flex align-center" style={{ color: 'white', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Cart <ChevronRight size={20} />
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
