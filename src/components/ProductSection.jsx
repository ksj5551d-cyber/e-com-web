import React from 'react';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section py-4">
      <div className="container">
        <div className="flex justify-between align-center mb-1" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{title}</h2>
          <div className="flex align-center" style={{ color: 'var(--secondary)', cursor: 'pointer', fontWeight: 600 }}>
            see all <ChevronRight size={20} />
          </div>
        </div>
        
        <div className="product-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
