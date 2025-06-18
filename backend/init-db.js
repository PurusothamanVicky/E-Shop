const { sequelize } = require('./models');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Function to initialize the database
async function initializeDatabase() {
  try {
    console.log('Connecting to the database...');
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    console.log('Syncing database models...');
    // Force: true will drop the table if it already exists (use with caution)
    await sequelize.sync({ force: process.env.DB_FORCE_SYNC === 'true' });
    console.log('Database models synchronized successfully.');
    
    console.log('Database initialization completed.');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

// Run the initialization
initializeDatabase();
