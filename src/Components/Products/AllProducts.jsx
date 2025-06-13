 import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import img1 from '../../assets/women/img1.jpg';
import img2 from '../../assets/women/img2.jpg';
import img3 from '../../assets/women/img3.jpg';
import img4 from '../../assets/women/img4.jpg';
import img5 from '../../assets/women/img5.jpg';
import img6 from '../../assets/women/img6.jpg';
import img7 from '../../assets/women/img7.jpg';
import img8 from '../../assets/women/img8.jpg';
import img9 from '../../assets/women/img9.jpg';

const WomenProducts = [
  { id: 1, img: img1, title: "Summer Vibes", description: "Light and breezy for hot days." },
  { id: 2, img: img2, title: "Floral Elegance", description: "Graceful floral prints for charm." },
  { id: 3, img: img3, title: "Party Wear", description: "Stylish and bold for big nights." },
  { id: 4, img: img4, title: "Casual Tee", description: "Everyday essential in premium cotton." },
  { id: 5, img: img5, title: "Classy Kurti", description: "Elegant kurti with modern touch." },
  { id: 6, img: img6, title: "Winter Warmth", description: "Warm fabric, cool style." },
  { id: 7, img: img7, title: "Office Chic", description: "Formal wear with sleek design." },
  { id: 8, img: img8, title: "Maxi Dress", description: "Flowy and fabulous for evenings." },
  { id: 9, img: img9, title: "Ethnic Style", description: "A timeless traditional piece." },
];

const AllProducts = () => {
  return (
    <div className='container min-h-screen py-10 px-4 bg-white dark:bg-gray-900 dark:text-white'>
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className='text-sm text-primary'>Stylish & Elegant</p>
        <h1 className='text-3xl font-bold'>Women Wear Collection</h1>
        <p className='text-gray-400'>Explore our premium collection for confident and trendsetting women — from casual to party wear.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {WomenProducts.map((item) => (
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
  );
};

export default AllProducts;
