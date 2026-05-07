import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format' },
  { id: 2, name: 'Smart Fitness Watch', price: 199, category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format' },
  { id: 3, name: 'Ergonomic Desk Chair', price: 450, category: 'Furniture', image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format' },
  { id: 4, name: 'Ultra-thin Laptop M2', price: 1299, category: 'Computers', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format' },
  { id: 5, name: 'Mechanical Keyboard', price: 150, category: 'Accessories', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format' },
  { id: 6, name: 'Noise Cancelling Earbuds', price: 129, category: 'Electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format' },
];

const Products = () => {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>All Products</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Browse through our entire catalog of premium items.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
