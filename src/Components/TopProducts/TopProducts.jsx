 import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id:1,
    img: Img1,
    title:"Casual Wear",
    description:"Perfect for everyday comfort with a stylish touch — easy to pair with jeans or shorts."
  },
  {
    id:2,
    img: Img2,
    title:"Printed Shirts",
    description:"Trendy prints that make a statement. Lightweight and breathable fabric for all-day wear."
  },
  {
    id:3,
    img: Img3,
    title:"Women Shirt",
    description:"Elegant, modern design made for confident women. Ideal for both work and casual outings."
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='container'>
       <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p
          data-aos="fade-up" 
          className='text-sm text-primary'
        >
          Top Rated Products for you
        </p>
        <h1
          data-aos="fade-up"
          className='text-3xl font-bold'
        >
          Best Products 
        </h1>
        <p
          data-aos="fade-up" 
          className='text-gray-400'
        >
          Discover our top-rated shirts designed to offer both comfort and elegance — picked with care for trendsetters like you.
        </p>
      </div>

      {/* 👇 Products Grid */}
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w[300px]'
            >
              <div>
                <img 
                  src={data.img} 
                  alt="shirts" 
                  className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md:'
                />
              </div>
              <div className='w-full flex items-center justify-center gap-1'>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
              </div>
              <h1 className='text-xl font-bold'>
                {data.title}
              </h1>
              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                {data.description}
              </p>
              <Link
               to="/order"
              className='inline-block mt-4'
                >
             <button
             className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all'
             >
            Order Now
           </button>
           </Link>

             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts;
