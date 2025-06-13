 import { Routes, Route } from 'react-router-dom';
import AllProducts from './Components/Products/AllProducts';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KidsWear from './Components/Pages/KidsWear';
import MensWear from './Components/Pages/MensWear';
import products from './Components/TrandingProducts/AllProducts';
 import OrderPage from './Components/OrderPage/OrderPage';

 


function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Products />
              <TopProducts handleOrderPopup={handleOrderPopup} />
              <Banner />
              <Subscribe />
              <Testimonials />
            </>
          }
        />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/kids-wear" element={<KidsWear />} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<OrderPage />} />

 

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
