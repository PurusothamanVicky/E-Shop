import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCart } from '../redux/slices/cartSlice';
import { productAPI } from '../services/api';

const ProductListing = ({ setSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Define fallback products outside of the effect to avoid React hooks rules violations
  const getFallbackProducts = () => [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      image: 'https://via.placeholder.com/500x500?text=Wireless+Headphones',
      description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
      id: 2,
      name: 'Cotton T-Shirt',
      price: 19.99,
      category: 'Clothing',
      image: 'https://via.placeholder.com/500x500?text=Cotton+T-Shirt',
      description: 'Comfortable cotton t-shirt available in various colors.'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Electronics',
      image: 'https://via.placeholder.com/500x500?text=Smart+Watch',
      description: 'Smart watch with health tracking and notifications.'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 79.99,
      category: 'Sports',
      image: 'https://via.placeholder.com/500x500?text=Running+Shoes',
      description: 'Lightweight running shoes with cushioned soles.'
    },
    {
      id: 5,
      name: 'Desk Lamp',
      price: 29.99,
      category: 'Home',
      image: 'https://via.placeholder.com/500x500?text=Desk+Lamp',
      description: 'Adjustable desk lamp with multiple brightness settings.'
    }
  ];

  // Fetch products from API when component mounts or filters change
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log('Fetching products from API...');
        
        // Build query parameters based on current filters
        const data = await productAPI.getProducts(
          searchTerm,
          selectedCategory !== 'All' ? selectedCategory : '',
          sortOrder !== 'default' ? sortOrder : ''
        );
        
        console.log('Products fetched successfully:', data);
        
        if (Array.isArray(data)) {
          setProducts(data);
          setFilteredProducts(data);
          setError(null);
        } else {
          console.error('API returned non-array data:', data);
          setError('Received invalid data format from server');
          // Use fallback data if API returns invalid format
          const fallbackProducts = getFallbackProducts();
          setProducts(fallbackProducts);
          setFilteredProducts(fallbackProducts);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        // Use fallback data if API fails
        const fallbackProducts = getFallbackProducts();
        setProducts(fallbackProducts);
        setFilteredProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [searchTerm, selectedCategory, sortOrder]); // Re-fetch when filters change

  // Filter and sort products
  useEffect(() => {
    // If we're still loading, don't filter or sort
    if (loading) return;
    
    // Apply client-side filtering and sorting
    const applyFilters = async () => {
      try {
        // If we have API connectivity, use it for filtering and sorting
        if (searchTerm || selectedCategory !== 'All' || sortOrder !== 'default') {
          try {
            const apiSortValue = 
              sortOrder === 'price-asc' ? 'price-asc' : 
              sortOrder === 'price-desc' ? 'price-desc' : '';
              
            const data = await productAPI.getProducts(
              searchTerm, 
              selectedCategory !== 'All' ? selectedCategory : '', 
              apiSortValue
            );
            setFilteredProducts(data);
            return;
          } catch (err) {
            console.error('API filtering failed, falling back to client-side filtering', err);
            // Fall back to client-side filtering if API call fails
          }
        }
        
        // Client-side filtering and sorting as fallback
        let result = [...products];
        
        // Apply search filter
        if (searchTerm) {
          result = result.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        
        // Apply category filter
        if (selectedCategory !== 'All') {
          result = result.filter(product => product.category === selectedCategory);
        }
        
        // Apply sorting
        if (sortOrder === 'price-asc') {
          result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
          result.sort((a, b) => b.price - a.price);
        }
        
        setFilteredProducts(result);
      } catch (err) {
        console.error('Error applying filters:', err);
      }
    };
    
    applyFilters();
  }, [products, searchTerm, selectedCategory, sortOrder, loading]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  // Get unique categories from products
  const categories = useMemo(() => {
    return ['All', ...new Set(products.map(product => product.category))];
  }, [products]);

  return (
    <div>
      <div className="mb-8 bg-white rounded-lg shadow p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Products</h1>
        
        <div className="flex flex-col gap-3 mb-4 sm:mb-6">
          {/* Search input */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 sm:flex-row justify-between">
            {/* Category filter */}
            <div className="w-full sm:w-auto">
              <select
                className="w-full sm:w-auto p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Sort options */}
            <div className="w-full sm:w-auto">
              <select
                className="w-full sm:w-auto p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && !loading && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      {/* Product grid */}
      {!loading && (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}
      
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
