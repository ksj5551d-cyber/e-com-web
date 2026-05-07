import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass"
      style={{ 
        padding: '1.5rem', 
        borderRadius: '1rem', 
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ 
        height: '200px', 
        background: 'rgba(255,255,255,0.05)', 
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img 
          src={product.image || 'https://via.placeholder.com/200'} 
          alt={product.name} 
          style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
        />
        <button style={{ 
          position: 'absolute', 
          top: '1rem', 
          right: '1rem', 
          background: 'rgba(0,0,0,0.5)', 
          border: 'none', 
          borderRadius: '50%', 
          padding: '0.5rem',
          color: 'white',
          cursor: 'pointer'
        }}>
          <Heart size={18} />
        </button>
      </div>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{product.category}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>${product.price}</span>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
          <ShoppingCart size={18} />
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
