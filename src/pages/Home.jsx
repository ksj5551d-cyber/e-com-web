// import React from 'react';
// import HeroSlider from '../components/HeroSlider';
// import CategoryGrid from '../components/CategoryGrid';
// import ProductSection from '../components/ProductSection';
import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { div } from "framer-motion/client"

// const dairyProducts = [
//   { id: 1, name: 'Amul Taaza Fresh Toned Milk', weight: '500 ml', price: 28, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/160a.jpg', time: '9 MINS' },
//   { id: 2, name: 'Amul Masti Spiced Buttermilk', weight: '200 ml', price: 15, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86307a.jpg', time: '9 MINS' },
//   { id: 3, name: 'Amul Gold Full Cream Milk', weight: '500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/162a.jpg', time: '10 MINS' },
//   { id: 4, name: 'Amul Butter', weight: '100 g', price: 58, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/123a.jpg', time: '9 MINS' },
//   { id: 5, name: 'Mother Dairy Paneer', weight: '200 g', price: 85, oldPrice: 90, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/1232a.jpg', time: '11 MINS' },
//   { id: 6, name: 'Mother Dairy Classic Curd', weight: '400 g', price: 35, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/234a.jpg', time: '9 MINS' },
// ];

// const snacksProducts = [
//   { id: 7, name: 'Lay\'s India\'s Magic Masala Potato Chips', weight: '50 g', price: 20, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10257a.jpg', time: '8 MINS' },
//   { id: 8, name: 'Kurkure Masala Munch Crisps', weight: '90 g', price: 30, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10258a.jpg', time: '8 MINS' },
//   { id: 9, name: 'Doritos Cheese Nachos', weight: '60 g', price: 35, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10259a.jpg', time: '10 MINS' },
//   { id: 10, name: 'Haldiram\'s Bhujia Sev', weight: '200 g', price: 55, oldPrice: 60, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10260a.jpg', time: '9 MINS' },
//   { id: 11, name: 'Uncle Chipps Spicy Treat', weight: '50 g', price: 20, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10261a.jpg', time: '8 MINS' },
//   { id: 12, name: 'Bingo Mad Angles', weight: '66 g', price: 25, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10262a.jpg', time: '9 MINS' },
// ];

// const Home = () => {
//   return (
//     <div className="home-page" style={{ paddingBottom: '4rem' }}>
//       <main>
//         <HeroSlider />
//         <CategoryGrid />
//         <ProductSection title="Dairy, Bread & Eggs" products={dairyProducts} />
//         <ProductSection title="Snacks & Munchies" products={snacksProducts} />
        
//         <section className="container py-4">
//             <img 
//                 src="https://cdn.grofers.com/layout-engine/2023-07/customer_app_2.png" 
//                 alt="Promo Banner" 
//                 style={{ width: '100%', borderRadius: '1rem', marginBottom: '2rem' }} 
//             />
//             <div className="flex gap-2">
//                 <img src="https://cdn.grofers.com/layout-engine/2023-07/print_ads_web_0.png" alt="Ad 1" style={{ width: '50%', borderRadius: '1rem' }} />
//                 <img src="https://cdn.grofers.com/layout-engine/2023-07/print_ads_web_0.png" alt="Ad 2" style={{ width: '50%', borderRadius: '1rem' }} />
//             </div>
//         </section>

//         <ProductSection title="Cold Drinks & Juices" products={snacksProducts.map(p => ({...p, id: p.id + 100}))} />
//       </main>
//     </div>
//   );
// };

// export default Home;

const Home=()=>{
  const [products, setproducts]= useState([])

  const getdata=async()=>{
    let response = await fetch('https://dummyjson.com/products')
    response= await response.json()
    setproducts(response.products)
    console.log(response);
    
  }
    
    
    useEffect(()=>{
      getdata()
    },[])
 return (
  <>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-24 object-contain"
            />

            <h1 className="text-sm font-semibold mt-2 line-clamp-2">
              {item.title}
            </h1>

            <p className="text-green-600 font-bold mt-1">
              ₹{item.price}
            </p>

            <button className="w-full mt-2 bg-blue-600 text-white text-sm py-1 rounded-lg hover:bg-blue-700">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
)
}
export default Home;