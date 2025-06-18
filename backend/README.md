# E-commerce Backend

This is the backend service for the E-commerce application. It provides API endpoints for product management, user authentication, and order processing.

## Setup and Configuration

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database

### Installation
1. Install dependencies:
```bash
npm install
```

2. Configure environment variables by creating a `.env` file with the following variables:
```
PORT=5000
DB_NAME=ecommerce_db
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=postgres
FORCE_SYNC=false
```

### Database Setup
- Create the database:
```bash
npx sequelize-cli db:create
```

- Run migrations:
```bash
npx sequelize-cli db:migrate
```

- Seed the database with initial data:
```bash
npx sequelize-cli db:seed:all
```

## Running the Server

### Standard Mode
```bash
npm start
```

### Development Mode with Nodemon
Nodemon has been configured to automatically restart the server when file changes are detected.

```bash
npm run dev
```

### Debug Mode
Run the server with Node.js inspector enabled:
```bash
npm run dev:debug
```

### Development Mode with Database Reset
This will initialize the database and then start the server:
```bash
npm run dev:seed
```

## Nodemon Configuration

Nodemon is configured to watch the following directories:
- `server.js`
- `routes/`
- `controllers/`
- `models/`
- `config/`
- `middleware/`

It will ignore:
- `node_modules/`
- Test files (`*.test.js`)

The configuration is stored in `nodemon.json`.

## API Documentation

The API provides endpoints for:
- Product listing, filtering, and sorting
- User authentication and management
- Order processing and history

API endpoints will be available at `http://localhost:5000/api/v1/`
