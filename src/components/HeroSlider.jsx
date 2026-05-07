import React from 'react';

const HeroSlider = () => {
  return (
    <section className="hero-slider py-4">
      <div className="container">
        <div style={{ width: '100%', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <img 
            src="https://cdn.grofers.com/layout-engine/2023-07/customer_app_1.png" 
            alt="Hero Banner" 
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        
        <div className="banner-grid py-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <img src="https://cdn.grofers.com/layout-engine/2023-03/baby-care-WEB.png" alt="Promo 1" style={{ width: '100%', borderRadius: '1rem' }} />
          <img src="https://cdn.grofers.com/layout-engine/2023-03/pet-care-WEB.png" alt="Promo 2" style={{ width: '100%', borderRadius: '1rem' }} />
          <img src="https://cdn.grofers.com/layout-engine/2023-03/stationery-WEB.png" alt="Promo 3" style={{ width: '100%', borderRadius: '1rem' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
