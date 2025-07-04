import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ setShowCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">E-Shop</div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Electronics</a>
          <a href="#" className="hover:text-gray-300">Clothing</a>
          
          <button 
            onClick={() => setShowCart(true)}
            className="flex items-center hover:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="bg-red-500 rounded-full px-2 text-sm">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
