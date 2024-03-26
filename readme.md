# Simple CRUD App Backend Documentation

This repository contains a simple CRUD (Create, Read, Update, Delete) backend application built using Node.js and MongoDB. It provides basic functionalities to manage products.

## Table of Contents

- [Setup](#setup)
- [Endpoints](#endpoints)
- [Dependencies](#dependencies)

## Setup

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Faranheit15/simple-CRUD-app-BACKEND.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```text
   DB_CONNECTION_STRING=<your_mongodb_connection_string>
   PORT=<desired_port_number>
   ```
4. Start the server:
   ```bash
   npm run serve
   ```

## Endpoints

- `GET /api/products`: Fetch all products.
- `GET /api/products/:id`: Fetch a product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

## Dependencies

- `Express (^4.19.1)`: Fast, unopinionated, minimalist web framework for Node.js.
- `MongoDB (^6.5.0)`: Official MongoDB Node.js driver.
- `Mongoose (^8.2.3)`: Elegant MongoDB object modeling for Node.js.
