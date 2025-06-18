'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation. Features Bluetooth 5.0 connectivity, 30-hour battery life, and premium sound quality.',
        price: 99.99,
        image: 'https://via.placeholder.com/500x500?text=Wireless+Headphones',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Premium Cotton T-Shirt',
        description: 'Comfortable 100% cotton t-shirt available in various colors. Features a modern fit and high-quality fabric that lasts wash after wash.',
        price: 19.99,
        image: 'https://via.placeholder.com/500x500?text=Cotton+T-Shirt',
        category: 'Clothing',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smart Watch',
        description: 'Feature-rich smart watch with health monitoring capabilities. Tracks heart rate, sleep patterns, and activity levels. Compatible with iOS and Android.',
        price: 199.99,
        image: 'https://via.placeholder.com/500x500?text=Smart+Watch',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slim Fit Denim Jeans',
        description: 'Classic denim jeans with modern slim fit. Made from premium denim with just the right amount of stretch for comfort.',
        price: 49.99,
        image: 'https://via.placeholder.com/500x500?text=Denim+Jeans',
        category: 'Clothing',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Portable Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with excellent sound quality. Waterproof, dustproof, and offers 12 hours of playtime on a single charge.',
        price: 79.99,
        image: 'https://via.placeholder.com/500x500?text=Bluetooth+Speaker',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Running Shoes',
        description: 'Lightweight running shoes with cushioned soles. Designed for maximum comfort and performance during your runs.',
        price: 89.99,
        image: 'https://via.placeholder.com/500x500?text=Running+Shoes',
        category: 'Footwear',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laptop Backpack',
        description: 'Durable laptop backpack with multiple compartments. Features padded laptop sleeve, water bottle pockets, and USB charging port.',
        price: 59.99,
        image: 'https://via.placeholder.com/500x500?text=Laptop+Backpack',
        category: 'Accessories',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Digital Camera',
        description: '24MP digital camera with 4K video recording. Includes 18-55mm lens, built-in Wi-Fi, and 3-inch LCD screen.',
        price: 599.99,
        image: 'https://via.placeholder.com/500x500?text=Digital+Camera',
        category: 'Electronics',
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Winter Jacket',
        description: 'Warm winter jacket with water-resistant outer shell. Features thermal insulation, adjustable hood, and multiple pockets.',
        price: 129.99,
        image: 'https://via.placeholder.com/500x500?text=Winter+Jacket',
        category: 'Clothing',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'Double-walled stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
        price: 24.99,
        image: 'https://via.placeholder.com/500x500?text=Water+Bottle',
        category: 'Accessories',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with premium sound quality. Features active noise cancellation, touch controls, and 20-hour battery life with charging case.',
        price: 149.99,
        image: 'https://via.placeholder.com/500x500?text=Wireless+Earbuds',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yoga Mat',
        description: 'Non-slip yoga mat made from eco-friendly materials. Perfect thickness for comfort and stability during your practice.',
        price: 29.99,
        image: 'https://via.placeholder.com/500x500?text=Yoga+Mat',
        category: 'Fitness',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
