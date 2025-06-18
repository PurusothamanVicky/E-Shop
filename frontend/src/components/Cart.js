import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';

const Cart = ({ setShowCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("=======cartItems======="+JSON.stringify(cartItems));
  const dispatch = useDispatch();
  
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-lg animate-slide-in">
        <div className="p-3 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6 sticky top-0 bg-white py-2 border-b">
            <h2 className="text-xl sm:text-2xl font-bold">Your Cart</h2>
            <button 
              onClick={() => setShowCart(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
              aria-label="Close cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500">Your cart is empty.</p>
              <button 
                onClick={() => setShowCart(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-h-[calc(70vh-120px)] overflow-y-auto pb-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b pb-3 sm:pb-4">
                    <img 
                      src={'https://dummyimage.com/80x80/e0e0e0/ffffff&text=' + encodeURIComponent(item.name.substring(0, 10))} 
                      alt={item.name} 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="ml-2 sm:ml-4 flex-1">
                      <h3 className="font-medium text-sm sm:text-base line-clamp-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">₹{parseFloat(item.price || 0).toFixed(2)}</p>
                      <div className="flex items-center mt-1 sm:mt-2">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                          className="bg-gray-200 px-2 py-0.5 rounded-l"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="bg-gray-100 px-3 py-0.5 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="bg-gray-200 px-2 py-0.5 rounded-r"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700 self-start p-1"
                      aria-label="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 sticky bottom-0 bg-white">
                <div className="flex justify-between text-base sm:text-lg font-bold mb-4 sm:mb-6">
                  <span>Total:</span>
                  <span>₹{parseFloat(totalPrice || 0).toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors flex items-center justify-center">
                  <span>Checkout</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
