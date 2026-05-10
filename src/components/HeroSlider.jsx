import React from 'react';
import { motion } from 'framer-motion';

const banners = [
  { id: 1, src: '/assets/hero_fresh_produce_1778389465294.png', alt: 'Fresh Produce' },
  { id: 2, src: '/assets/hero_dairy_breakfast_1778389635250.png', alt: 'Dairy & Breakfast' },
  { id: 3, src: '/assets/hero_snacks_munchies_1778389732571.png', alt: 'Snacks & Munchies' }
];

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider py-4">
      <div className="container">
        <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
          {banners.map((banner, index) => (
            <motion.img 
              key={banner.id}
              src={banner.src} 
              alt={banner.alt} 
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block' 
              }}
            />
          ))}
          
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
            {banners.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrent(i)}
                style={{ 
                  width: i === current ? '2rem' : '0.5rem', 
                  height: '0.5rem', 
                  borderRadius: '1rem', 
                  backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} 
              />
            ))}
          </div>
        </div>
        
        <div className="banner-grid py-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <motion.img 
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" 
            alt="Promo 1" 
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1.5rem' }} 
          />
          <motion.img 
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" 
            alt="Promo 2" 
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1.5rem' }} 
          />
          <motion.img 
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1540340061720-ee2c4239993d?auto=format&fit=crop&q=80&w=600" 
            alt="Promo 3" 
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1.5rem' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
