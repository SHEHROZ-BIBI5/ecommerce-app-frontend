 import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FaMapLocationDot } from 'react-icons/fa6';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'About', link: '/#about' },
  { title: 'Contact', link: '/#contact' },
  { title: 'Blog', link: '/#blog' },
];

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <FiShoppingBag size={28} />
            ShopMe
          </h1>
          <p className="text-sm text-gray-300">
            Apka trusted e-commerce partner. Har product, har style — bas ek click door.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul className="space-y-2">
            {FooterLinks.map((link) => (
              <li
                key={link.title}
                className="hover:text-primary hover:translate-x-1 duration-200 text-gray-300"
              >
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex items-center gap-4 text-2xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="flex flex-col space-y-3 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaMapLocationDot />
              <span>Sialkot, Islamabad</span>

             </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+92 1233 32232</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
