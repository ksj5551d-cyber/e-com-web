import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format' },
  { id: 2, name: 'Smart Fitness Watch', price: 199, category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format' },
  { id: 3, name: 'Ergonomic Desk Chair', price: 450, category: 'Furniture', image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format' },
  { id: 4, name: 'Ultra-thin Laptop M2', price: 1299, category: 'Computers', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format' },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '-5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1
        }}></div>
        
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}
            >
              NEW ARRIVALS 2026
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}
            >
              Elevate Your Lifestyle With <span style={{ color: 'var(--primary)' }}>Premium Tech.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}
            >
              Experience the future of shopping with our curated collection of high-end gadgets and lifestyle products.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Shop Now <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                View Collection
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
              <Zap style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
              <h4>Fast Shipping</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Delivery within 24-48 hours nationwide.</p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
              <ShieldCheck style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
              <h4>Secure Payment</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fully encrypted payment gateway.</p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
              <Star style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
              <h4>Top Quality</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Handpicked products from top brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem' }}>Featured Products</h2>
              <p style={{ color: 'var(--text-muted)' }}>Explore our most popular and trending items.</p>
            </div>
            <button className="btn btn-outline">View All</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
