const { Product } = require('../models');
const { Op } = require('sequelize');

// Get all products with filtering and sorting
exports.getProducts = async (req, res) => {
  try {
    const { search, category, sort } = req.query;
    
    // Build filter conditions
    const whereConditions = {};
    
    if (search) {
      whereConditions.name = { [Op.iLike]: `%${search}%` };
    }
    
    if (category && category !== 'All') {
      whereConditions.category = category;
    }
    
    // Build sort options
    let order = [['createdAt', 'DESC']];
    
    if (sort === 'price-asc') {
      order = [['price', 'ASC']];
    } else if (sort === 'price-desc') {
      order = [['price', 'DESC']];
    }
    
    console.log('Fetching products with conditions:', { whereConditions, order });
    
    const products = await Product.findAll({
      where: whereConditions,
      order
    });
    
    console.log(`Successfully fetched ${products.length} products from database`);
    
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category
    });
    
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ message: 'Error creating product', error: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const { name, description, price, image, category, inStock } = req.body;
    
    await product.update({
      name: name || product.name,
      description: description || product.description,
      price: price || product.price,
      image: image || product.image,
      category: category || product.category,
      inStock: inStock !== undefined ? inStock : product.inStock
    });
    
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(400).json({ message: 'Error updating product', error: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await product.destroy();
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};
