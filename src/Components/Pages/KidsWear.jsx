 import React from 'react';
import { Link } from 'react-router-dom';

import imgs1 from '../../assets/kids/imgs1.jpg';
import imgs2 from '../../assets/kids/imgs2.jpg';
import imgs3 from '../../assets/kids/imgs3.jpg';
import imgs4 from '../../assets/kids/imgs4.jpg';
import imgs5 from '../../assets/kids/imgs5.jpg';
import imgs6 from '../../assets/kids/imgs6.jpg';
import imgs7 from '../../assets/kids/imgs7.jpg';
import imgs8 from '../../assets/kids/imgs8.jpg';
import imgs9 from '../../assets/kids/imgs9.jpg';
import imgs10 from '../../assets/kids/imgs10.jpg';

const AllImages = [
  { id: 1, img: imgs1, title: "Cute Hoodie", description: "Warm and cozy hoodie for playful days." },
  { id: 2, img: imgs2, title: "Denim Overalls", description: "Trendy denim for all seasons." },
  { id: 3, img: imgs3, title: "Summer Dress", description: "Lightweight and colorful for sunny outings." },
  { id: 4, img: imgs4, title: "T-shirt Combo", description: "Soft cotton shirts for daily wear." },
  { id: 5, img: imgs5, title: "Classic Jacket", description: "Stylish jacket to stay warm." },
  { id: 6, img: imgs6, title: "Party Frock", description: "Glam frock perfect for celebrations." },
  { id: 7, img: imgs7, title: "Track Suit", description: "Comfortable fit for active kids." },
  { id: 8, img: imgs8, title: "Printed Set", description: "Colorful and fun prints." },
  { id: 9, img: imgs9, title: "Baby Romper", description: "Cute and cozy for toddlers." },
  { id: 10, img: imgs10, title: "Warm Set", description: "Keep your baby warm in winter." },
];

function KidsWear() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-white py-10 px-4'>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Kids Wear</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {AllImages.map((item) => (
            <div
              key={item.id}
              className='bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white rounded-2xl text-center p-4 shadow-xl duration-300 group max-w-[300px]'
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 duration-300"
              />
              <h2 className='text-xl font-bold mt-4'>{item.title}</h2>
              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{item.description}</p>
              <Link to="/order" className='inline-block mt-4'>
                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all'>
                  Order Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className='mt-10 flex justify-center'>
          <button
            onClick={() => window.history.back()}
            className='bg-primary text-white py-2 px-6 rounded-md hover:scale-105 transition'
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsWear;
