import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/animations.css';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <Navbar setShowCart={setShowCart} />
      <main className="container mx-auto px-4 py-8">
        <ProductListing setSelectedProduct={setSelectedProduct} />
      </main>
      {showCart && <Cart setShowCart={setShowCart} />}
      {selectedProduct && <ProductModal product={selectedProduct} setSelectedProduct={setSelectedProduct} />}
    </div>
  );
}

export default App;
