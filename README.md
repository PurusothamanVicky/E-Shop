# E-commerce Product Listing Application

A full-stack e-commerce product listing application built with React, Redux, Tailwind CSS, Node.js, Express, and PostgreSQL.

## Features

- **Product Listing Page**: Responsive grid of product cards
- **Filtering and Sorting**: Search by name, filter by category, sort by price
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Details**: Modal with detailed product information

## Tech Stack

### Frontend
- React
- Redux for state management
- Tailwind CSS for styling

### Backend
- Node.js with Express
- PostgreSQL database with Sequelize ORM

## Project Structure

```
e-commerce/
├── frontend/                # React frontend
│   ├── public/              # Static files
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── redux/           # Redux store and slices
│   │   └── tailwind.css     # Tailwind CSS file
│   └── tailwind.config.js   # Tailwind configuration
├── backend/                 # Node.js backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Request controllers
│   ├── models/              # Sequelize models
│   ├── routes/              # Express routes
│   └── server.js            # Express server
└── docs/                    # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Update the `.env` file in the backend directory with your database credentials
5. Set up the database using Sequelize CLI:
   ```
   cd backend
   npx sequelize-cli db:create        # Create the database
   npx sequelize-cli db:migrate       # Run migrations to create tables
   npx sequelize-cli db:seed:all      # Seed the database with initial data
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/products`: Get all products (with optional filtering and sorting)
- `GET /api/products/:id`: Get a single product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product
