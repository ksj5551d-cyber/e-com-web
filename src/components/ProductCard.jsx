import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="card"
      style={{ 
        padding: '0.8rem', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <div style={{ 
          height: '140px', 
          marginBottom: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={product.image || 'https://via.placeholder.com/140'} 
            alt={product.name} 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
          <div style={{ background: '#f1f8ff', padding: '2px 4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/labels/g-clock.png" alt="clock" style={{ width: '10px', height: '10px' }} />
            <span style={{ fontSize: '0.6rem', fontWeight: 800, marginLeft: '2px' }}>{product.time || '10 MINS'}</span>
          </div>
        </div>

        <h3 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.2rem', color: '#1f1f1f', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', height: '2.4rem' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.8rem' }}>{product.weight || '500 g'}</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex flex-column">
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1f1f1f' }}>₹{product.price}</span>
            {product.oldPrice && <span style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹{product.oldPrice}</span>}
        </div>
        <button className="btn btn-outline-success" style={{ padding: '0.4rem 1.2rem', fontSize: '0.8rem', textTransform: 'uppercase' }}>
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
