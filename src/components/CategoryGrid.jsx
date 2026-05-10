import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Dairy & Eggs', img: '/assets/cat_dairy_1778389750258.png' },
  { id: 2, name: 'Snacks', img: '/assets/cat_snacks_1778389895617.png' },
  { id: 3, name: 'Vegetables', img: '/assets/cat_produce_1778389938267.png' },
  { id: 4, name: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&auto=format' },
  { id: 5, name: 'Frozen Food', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&auto=format' },
  { id: 6, name: 'Coffee & Tea', img: 'https://images.unsplash.com/photo-1544787210-28271af3cb14?w=200&auto=format' },
  { id: 7, name: 'Bakery', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format' },
  { id: 8, name: 'Sweets', img: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=200&auto=format' },
  { id: 9, name: 'Pantry', img: 'https://images.unsplash.com/photo-1584473457406-623ae22067ed?w=200&auto=format' },
  { id: 10, name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&auto=format' },
];

const CategoryGrid = () => {
  return (
    <section className="category-grid py-6">
      <div className="container">
        <div className="grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', 
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              whileHover={{ y: -5 }}
              className="category-item" 
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <div className="category-img-wrapper" style={{ 
                marginBottom: '0.75rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '1.5rem',
                padding: '10px',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}>
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#333' }}>{cat.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
