 import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import img1 from '../../assets/Mens/img1.jpg';
import img2 from '../../assets/Mens/img2.jpg';
import img3 from '../../assets/Mens/img3.jpg';
import img4 from '../../assets/Mens/img4.jpg';
import img5 from '../../assets/Mens/img5.jpg';
import img6 from '../../assets/Mens/img6.jpg';
import img7 from '../../assets/Mens/img7.jpg';
import img8 from '../../assets/Mens/img8.jpg';
import img9 from '../../assets/Mens/img9.jpg';
import img10 from '../../assets/Mens/img10.jpg';
import img11 from '../../assets/Mens/img11.jpg';
import img12 from '../../assets/Mens/img12.jpg';

const MensProducts = [
  { id: 1, img: img1, title: "Classic Tee", description: "Soft cotton for everyday comfort." },
  { id: 2, img: img2, title: "Denim Jacket", description: "Vintage style with modern fit." },
  { id: 3, img: img3, title: "Formal Shirt", description: "Sharp look for office & events." },
  { id: 4, img: img4, title: "Casual Hoodie", description: "Stay warm in street style." },
  { id: 5, img: img5, title: "Sporty Tracksuit", description: "Activewear for gym and play." },
  { id: 6, img: img6, title: "Traditional Kurta", description: "Cultural vibes with class." },
  { id: 7, img: img7, title: "Jogger Pants", description: "All-day comfort for movement." },
  { id: 8, img: img8, title: "Graphic Tee", description: "Bold prints for bold men." },
  { id: 9, img: img9, title: "Sweatshirt", description: "Cozy and cool for winter." },
  { id: 10, img: img10, title: "Polo Shirt", description: "Smart casual essential." },
  { id: 11, img: img11, title: "Blazer Coat", description: "Elegance for formal nights." },
  { id: 12, img: img12, title: "Ethnic Wear", description: "Rooted in tradition, made modern." },
];

function MensWear() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-white py-10 px-4'>
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className='text-sm text-primary'>For The Modern Gentleman</p>
          <h1 className='text-3xl font-bold'>Men's Wear Collection</h1>
          <p className='text-gray-400'>Explore classy, comfy, and confident men's styles — traditional to streetwear, we’ve got you covered.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {MensProducts.map((item) => (
            <div
              key={item.id}
              className='bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white rounded-2xl text-center p-4 shadow-xl duration-300 group max-w-[300px]'
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 duration-300"
              />
              <div className='w-full flex items-center justify-center gap-1 mt-2'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
              </div>
              <h2 className='text-xl font-bold mt-2'>{item.title}</h2>
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
}

export default MensWear;
