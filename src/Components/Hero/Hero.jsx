  import React from 'react';
import img1 from "../../assets/hero/women.png";
import img2 from "../../assets/hero/shopping.png";
import img3 from "../../assets/hero/sale.png";
import Slider from 'react-slick';
 import { Link } from 'react-router-dom';


const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Upto 50% off\non all Men's Wear",
    description: "Discover the latest trends in men’s fashion. Shop jackets, jeans, t-shirts & more at half price."
  },
  {
    id: 2,
    img: img2,
    title: "Upto 30% off\non all Women's Wear",
    description: "Style meets savings! Shop elegant dresses, tops & accessories with 30% off – only for a limited time."
  },
  {
    id: 3,
    img: img3,
    title: "Upto 50% off\non all Women's Wear",
    description: "Huge savings on women's collection! Explore bold styles, comfy fits & stunning designs – half the price!"
  }
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    autoplay: true,
  };

  return (
    <div className='relative overflow-hidden min-h-screen dark:bg-slate-950 dark:text-white duration-300'>

      {/* 🔷 Background Shape */}
      <div
        className="absolute top-0 left-0 w-full h-3/4 bg-primary z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 80%, 0 60%)' }}
      ></div>

      <div className='container relative z-10'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div
              key={data.id}
              className='flex flex-col sm:flex-row justify-center items-center min-h-screen text-white gap-8'
            >

              {/* 🖼 Image Centered */}
              <div className='flex justify-center items-center'>
                <img
                  src={data.img}
                  alt="slider"
                  className='w-[300px] h-[300px] object-contain'
                />
              </div>

              {/* 📝 Text Centered Vertically and Right on Large Screens */}
              <div className='flex flex-col justify-center items-center sm:items-end text-center sm:text-right gap-4 sm:pr-12'>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold whitespace-pre-line">
                  {data.title}
                </h1>
                <p className="text-sm max-w-md">
                  {data.description}
                </p>
                <Link
              to="/order"
              className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white
               py-3 px-9 rounded-full flex items-center gap-3 group'
              >
             <span className='group-hover:block  transition-all duration-200'>Order Now</span>
              </Link>


               </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
