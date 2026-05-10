import React from 'react';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section py-8">
      <div className="container">
        <div className="flex justify-between align-center" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="section-title" style={{ margin: 0 }}>{title}</h2>
          <div className="flex align-center" style={{ color: '#0c831f', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            see all <ChevronRight size={18} />
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
