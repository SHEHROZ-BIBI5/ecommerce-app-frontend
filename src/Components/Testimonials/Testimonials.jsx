 import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
  {
    id: 1,
    name: "Ali Khan",
     text: "Shopping here was super easy and fast. I loved the quality of clothes I received!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ayesha Siddiqi",
     text: "Amazing discounts and the delivery was quick. Totally worth it!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Hamza Tariq",
    text: "I was surprised by the style and fit of the clothes. Will definitely order again!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sana Javed",
     text: "Jo bhi maanga wohi mila, aur time pe! Mazaa aa gaya shopping ka.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Usman Ghazi",
     text: "Highly recommended for online shopping. Smooth and simple experience.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            What our customers are saying
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Testimonials
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            We value our customers and their feedback. Here's what some of them had to say about their experience with us.
          </p>
        </div>

        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className='my-4 px-2' key={data.id}>
                <div className='flex flex-col gap-3 shadow-md py-6 px-4 rounded-lg dark:bg-slate-600 bg-primary/10 relative h-full'>
                  <div className='mb-3 flex justify-start'>
                    <img src={data.img} alt={data.name} className='rounded-full w-16 h-16' />
                  </div>
                  <div className='flex flex-col items-start text-left gap-2'>
                    <p className='text-xs dark:text-slate-300 text-gray-500'>{data.text}</p>
                    <h1 className='text-lg font-semibold dark:text-slate-300 text-black/80'>{data.name}</h1>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-2 select-none'>“</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
