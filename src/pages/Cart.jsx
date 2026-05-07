import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Your Cart</h2>
      
      <div className="glass" style={{ padding: '4rem', borderRadius: '1.5rem', textAlign: 'center' }}>
        <ShoppingBag size={64} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', opacity: 0.5 }} />
        <h3>Your cart is empty</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          <ArrowLeft size={18} />
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
