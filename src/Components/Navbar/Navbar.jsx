 import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import DarkMode from './DarkMode';

const Menu = [
  { id: 1, title: "Home", link: "/#" },
  { id: 2, title: "Login", link: "/login" },
  { id: 3, title: "Kids wear", link: "/kids-wear" },
  { id: 4, title: "Mens wear", link: "/mens-wear" },
  { id: 5, title: "Women Wear", link: "/all-products" },
];

const Dropdownlist = [
  { id: 1, name: "All Products", link: "/AllProducts" },
  { id: 2, name: "Best Selling", link: "/#" }
];

const Navbar = ({ handleOrderPopup }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const term = searchTerm.toLowerCase();
      if (term.includes('men')) {
        navigate('/mens-wear');
      } else if (term.includes('women')) {
        navigate('/all-products');
      } else if (term.includes('kids')) {
        navigate('/kids-wear');
      } else {
        alert('Product not found 😔');
      }
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-primary/2 text-black dark:text-black duration-200 relative z-40">
      <div className="bg-white dark:bg-blue-300 ">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-xl flex items-center gap-1 text-black dark:text-white">
              <FiShoppingBag size={30} />
              ShopMe
            </a>
          </div>
                 
          <div className='flex justify-center items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 text-white
                rounded-lg border border-gray-300 py-1 px-2 text-sm focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>

            <Link
              to="/order"
              className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>Order Now</span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </Link>

            <div> 
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.title} </a>
            </li>
          ))}
          <li className='group relative cursor-pointer'>
            <a href="#" className=' flex items-center gap-[2px] py-2'>
              Tranding Products
              <span>
                <FaCaretDown className='transitoin-all duration-200 group-hover:rotate-180'/> 
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md py-2 hover:bg-primary/20 ">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
