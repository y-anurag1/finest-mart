import React from 'react';
import boyImage from '../assets/boy.png';
import spinachImage from '../assets/spinach.png'; // Make sure this path is correct
import carrotImage from '../assets/carrot.png';   // Make sure this path is correct

// A reusable component for the product cards (Spinach, Carrot)
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-40 flex flex-col items-center justify-center text-center">
      <img src={image} alt={name} className="w-24 h-24 object-contain mb-2" />
      <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
      <p className="text-xs text-green-500">${price.toFixed(2)}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white pt-6 pb-10 overflow-hidden lg:min-h-[calc(100vh-60px)] flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 via-white to-white z-0 opacity-70 hidden md:block"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 border-2 border-orange-200 rounded-full opacity-50 z-0 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-yellow-200 rounded-full opacity-50 z-0 hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Let your <span className="text-orange-400">groceries</span> come to you
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 shadow-sm max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search here"
              className="flex-grow py-2 px-4 focus:outline-none rounded-l-full"
            />
            <button className="bg-orange-400 hover:bg-orange-500 transition duration-200 text-white p-3 rounded-full mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto md:mx-0">
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fresh Vegetables
            </div>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100% Guarantee
            </div>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cash on Delivery
            </div>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fast Delivery
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative">
         
          <img
            src={boyImage}
            alt="Delivery boy with groceries"
            className="w-full max-w-sm lg:max-w-md h-auto object-contain z-10"
          />

          <div className="absolute top-1/4 right-0 lg:right-10 flex flex-col space-y-4 transform translate-x-1/2 md:translate-x-0 lg:translate-x-1/4 xl:translate-x-1/2">
            <ProductCard image={spinachImage} name="Fresh Spinach" price={12.00} />
            <ProductCard image={carrotImage} name="Fresh Carrot" price={9.00} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;