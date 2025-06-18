import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductModal = ({ product, setSelectedProduct }) => {
  const dispatch = useDispatch();
  
  // Directly use a reliable image source
  const defaultImage = 'https://dummyimage.com/600x400/e0e0e0/ffffff&text=' + encodeURIComponent(product.name);
  
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setSelectedProduct(null);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[95vh] overflow-y-auto">
        {/* Close button for mobile - fixed at the top right */}
        <button 
          onClick={() => setSelectedProduct(null)}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow-md md:hidden"
          aria-label="Close product details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img 
              src={defaultImage} 
              alt={product.name} 
              className="w-full h-56 sm:h-64 md:h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4 sm:p-6 md:w-1/2">
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 pr-8 md:pr-0">{product.name}</h2>
              {/* Desktop close button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="hidden md:block text-gray-500 hover:text-gray-700"
                aria-label="Close product details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-700 text-lg sm:text-xl font-bold mb-3 sm:mb-4">₹{parseFloat(product.price || 0).toFixed(2)}</p>
            
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Description:</h3>
              <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
            </div>
            
            {product.category === 'Clothing' && (
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Available Sizes:</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="border border-gray-300 px-2 sm:px-3 py-1 rounded hover:bg-gray-100 text-sm">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.category === 'Electronics' && (
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Colors:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Silver'].map(color => (
                    <button key={color} className="border border-gray-300 px-2 sm:px-3 py-1 rounded hover:bg-gray-100 text-sm">
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">Add to Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
