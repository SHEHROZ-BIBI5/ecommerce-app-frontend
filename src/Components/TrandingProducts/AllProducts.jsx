 import React from 'react';
import imgs2 from '../../assets/kids/imgs2.jpg';
import imgs3 from '../../assets/kids/imgs3.jpg';
import imgs4 from '../../assets/kids/imgs4.jpg';
import imgs5 from '../../assets/kids/imgs5.jpg';
import imgs6 from '../../assets/kids/imgs6.jpg';
import imgs7 from '../../assets/kids/imgs7.jpg';
import imgs8 from '../../assets/Mens/img3.jpg';
import imgs9 from '../../assets/Mens/img4.jpg';
import imgs10 from '../../assets/Mens/img5.jpg';
import imgs11 from '../../assets/Mens/img6.jpg';
import imgs12 from '../../assets/Mens/img7.jpg';
import imgs13 from '../../assets/Mens/img8.jpg';
import imgs14 from '../../assets/Mens/img9.jpg';
import imgs15 from '../../assets/women/img2.jpg';
import imgs16 from '../../assets/women/img3.jpg';
import imgs17 from '../../assets/women/img4.jpg';
import imgs18 from '../../assets/women/img5.jpg';
import imgs19 from '../../assets/women/img6.jpg';
import imgs20 from '../../assets/women/img7.jpg';

const allImages = [
  imgs2, imgs3, imgs4, imgs5, imgs6, imgs7,
  imgs8, imgs9, imgs10, imgs11, imgs12, imgs13, imgs14,
  imgs15, imgs16, imgs17, imgs18, imgs19, imgs20
];

function Products() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-white py-10 px-4'>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-${index}`}
              className="rounded-lg shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
