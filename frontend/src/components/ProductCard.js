import React from 'react';

const ProductCard = ({ product, onAddToCart, onClick }) => {
  const { name, price, image } = product;
  
  // Directly use a reliable image source
  const defaultImage = 'https://dummyimage.com/300x200/e0e0e0/ffffff&text=' + encodeURIComponent(name);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:scale-105 h-full flex flex-col">
      <div className="cursor-pointer flex-grow" onClick={onClick}>
        <img 
          src={defaultImage} 
          alt={name} 
          className="w-full h-36 sm:h-48 object-cover"
          loading="lazy"
        />
        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-base sm:text-lg mb-1 line-clamp-2">{name}</h3>
          <p className="text-gray-700 font-bold text-sm sm:text-base">₹{parseFloat(price || 0).toFixed(2)}</p>
        </div>
      </div>
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 mt-auto">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="w-full bg-blue-600 text-white py-1.5 sm:py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base flex items-center justify-center"
          aria-label={`Add ${name} to cart`}
        >
          <span className="mr-1">Add to Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
