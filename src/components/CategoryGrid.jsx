import React from 'react';

const categories = [
  { id: 1, name: 'Dairy, Bread & Eggs', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735163507-2' },
  { id: 2, name: 'Snacks & Munchies', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554030635-4' },
  { id: 3, name: 'Fruits & Vegetables', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554345214-4' },
  { id: 4, name: 'Cold Drinks & Juices', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554530514-4' },
  { id: 5, name: 'Instant & Frozen Food', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554615802-4' },
  { id: 6, name: 'Tea, Coffee & Health Drinks', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554710188-4' },
  { id: 7, name: 'Bakery & Biscuits', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554805305-4' },
  { id: 8, name: 'Sweet Tooth', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702554910305-4' },
  { id: 9, name: 'Atta, Rice & Dal', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702555010305-4' },
  { id: 10, name: 'Masala, Oil & More', img: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702555110305-4' },
];

const CategoryGrid = () => {
  return (
    <section className="category-grid py-4">
      <div className="container">
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '1rem' }}>
          {categories.map((cat) => (
            <div key={cat.id} className="category-item" style={{ textAlign: 'center', cursor: 'pointer' }}>
              <div className="category-img-wrapper" style={{ marginBottom: '0.5rem' }}>
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.2 }}>{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
