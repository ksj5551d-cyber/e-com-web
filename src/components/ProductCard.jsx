import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      className="card"
      style={{ 
        padding: '1rem', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '1.5rem',
        border: '1px solid #f0f0f0',
        transition: 'all 0.3s ease',
        backgroundColor: '#fff'
      }}
    >
      <div>
        <div style={{ 
          height: '160px', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '1rem',
          overflow: 'hidden'
        }}>
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src={product.image || 'https://via.placeholder.com/160'} 
            alt={product.name} 
            style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <div style={{ background: '#f0fdf4', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', border: '1px solid #dcfce7' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#166534' }}>{product.time || '10 MINS'}</span>
          </div>
        </div>

        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem', color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: '1.4' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '1rem' }}>{product.weight || '500 g'}</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <div className="flex flex-column">
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#000' }}>₹{product.price}</span>
            {product.oldPrice && <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#999' }}>₹{product.oldPrice}</span>}
        </div>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="btn" 
          style={{ 
            padding: '0.5rem 1.2rem', 
            fontSize: '0.8rem', 
            fontWeight: 700,
            textTransform: 'uppercase',
            backgroundColor: '#0c831f',
            color: '#fff',
            border: 'none',
            borderRadius: '0.75rem',
            cursor: 'pointer'
          }}
        >
          Add
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
