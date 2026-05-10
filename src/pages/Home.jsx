import React from 'react';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import ProductSection from '../components/ProductSection';
import SEO from '../components/SEO';

const dairyProducts = [
  { id: 1, name: 'Fresh Toned Milk', weight: '500 ml', price: 28, image: 'https://images.unsplash.com/photo-1550583726-22482e82a185?w=400&auto=format', time: '9 MINS' },
  { id: 2, name: 'Spiced Buttermilk', weight: '200 ml', price: 15, image: 'https://images.unsplash.com/photo-1550583726-22482e82a185?w=400&auto=format', time: '9 MINS' },
  { id: 3, name: 'Full Cream Milk', weight: '500 ml', price: 34, image: 'https://images.unsplash.com/photo-1563636619-e9107da5a76a?w=400&auto=format', time: '10 MINS' },
  { id: 4, name: 'Salted Butter', weight: '100 g', price: 58, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&auto=format', time: '9 MINS' },
  { id: 5, name: 'Fresh Paneer', weight: '200 g', price: 85, oldPrice: 90, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format', time: '11 MINS' },
  { id: 6, name: 'Classic Curd', weight: '400 g', price: 35, image: 'https://images.unsplash.com/photo-1485962391905-dc37bc33e58b?w=400&auto=format', time: '9 MINS' },
];

const snacksProducts = [
  { id: 7, name: 'Magic Masala Potato Chips', weight: '50 g', price: 20, image: 'https://images.unsplash.com/photo-1566478989125-0db620a8c21f?w=400&auto=format', time: '8 MINS' },
  { id: 8, name: 'Crunchy Corn Puffs', weight: '90 g', price: 30, image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&auto=format', time: '8 MINS' },
  { id: 9, name: 'Cheese Nachos', weight: '60 g', price: 35, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format', time: '10 MINS' },
  { id: 10, name: 'Roasted Almonds', weight: '200 g', price: 55, oldPrice: 60, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format', time: '9 MINS' },
  { id: 11, name: 'Spicy Peanut Mix', weight: '50 g', price: 20, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&auto=format', time: '8 MINS' },
  { id: 12, name: 'Milk Chocolate Bar', weight: '66 g', price: 25, image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&auto=format', time: '9 MINS' },
];

const Home = () => {
  return (
    <div className="home-page" style={{ paddingBottom: '4rem' }}>
      <SEO title="QuickMart - Grocery Delivery in Minutes" />
      <main>
        <HeroSlider />
        <CategoryGrid />
        <ProductSection title="Dairy, Bread & Eggs" products={dairyProducts} />
        <ProductSection title="Snacks & Munchies" products={snacksProducts} />
        
        <section className="container py-8">
            <motion.img 
                whileHover={{ scale: 1.01 }}
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1200" 
                alt="Promo Banner" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '1.5rem', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} 
            />
            <div className="flex gap-4" style={{ display: 'flex', gap: '1.5rem' }}>
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" 
                  alt="Ad 1" 
                  style={{ width: '50%', height: '200px', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }} 
                />
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" 
                  alt="Ad 2" 
                  style={{ width: '50%', height: '200px', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }} 
                />
            </div>
        </section>

        <ProductSection title="Cold Drinks & Juices" products={snacksProducts.map(p => ({...p, id: p.id + 100}))} />
      </main>
    </div>
  );
};

export default Home;
