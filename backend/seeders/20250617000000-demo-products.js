'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Smartphone X',
        description: 'Latest smartphone with advanced camera features and all-day battery life.',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laptop Pro',
        description: 'High-performance laptop for professionals with 16GB RAM and 512GB SSD.',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wireless Headphones',
        description: 'Noise-cancelling wireless headphones with 30-hour battery life.',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Running Shoes',
        description: 'Lightweight running shoes with responsive cushioning for maximum comfort.',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Clothing',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Denim Jacket',
        description: 'Classic denim jacket with modern fit, perfect for any casual outfit.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        category: 'Clothing',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coffee Maker',
        description: 'Programmable coffee maker with 12-cup capacity and auto-shutoff feature.',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Home',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yoga Mat',
        description: 'Non-slip yoga mat with alignment markings for proper positioning.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Sports',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor and GPS.',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Electronics',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Backpack',
        description: 'Water-resistant backpack with laptop compartment and multiple pockets.',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Accessories',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desk Lamp',
        description: 'Adjustable desk lamp with multiple brightness levels and color temperatures.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1534281368625-8bdd1c32d0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Home',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
