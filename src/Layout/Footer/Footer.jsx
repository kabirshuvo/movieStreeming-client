import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dry py-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
        <Link to="/">
            <img
              src="/images/movieStreem_logo.png"
              alt="movie streeming logo"
              className="w-full h-12 object-contain rounded flex-colo"
            />
          </Link>
          <div >


        

          </div>
          
          {/* Footer Links */}
          <div className="mt-4 space-x-4">
            <a href="/" className="hover:text-subMain">Home</a>
            <a href="/about-us" className="hover:text-subMain">About</a>
            <a href="/subscribe" className="hover:text-subMain">Subscribe</a>
            <a href="/contact-us" className="hover:text-subMain">Contact Us</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          {/* Footer Text */}
          <p className="mt-4 text-sm hover:text-subMain">&copy; {new Date().getFullYear()}  Movie Streem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
