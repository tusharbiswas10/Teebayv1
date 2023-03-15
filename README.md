# Overview
This is simple product renting and buying/selling products application built with a React and Apollo client, and a Express.js and Prisma server. It allows users to sign up, log in, view a list of products, add products, edit existing products, and delete products. The project uses GraphQL to handle data management and communication between the client and server.
# Installation
  1.	Clone the project repository from GitHub.
  2.	Navigate to the project directory in the terminal.
  3.	Install dependencies for the client and server:
        1. For the client: run npm install in the client directory.
        2. For the server: run npm install in the server directory.
  4.	Create a .env file in the server directory, and add "PORT" "DATABASE_URL" "JWT_SECRET" in the .env file.
  5.	Run the server with the command nodemon index.js in the server directory.
  6.	Run the client with the command npm start in the client directory.
# Usage
Once the client and server are running, you can use the following functionalities of the application:
  1.	Sign up: Navigate to the sign-up page and fill in the required information to create an account.
  2.	Log in: Navigate to the log-in page and enter your credentials to log in to your account.
  3.	View products: Navigate to the home page to view a list of available products. Click on a product to view its details.
  4.	Add product: Navigate to the "Add Product" page, fill in the required fields and click the "Add" button to create a new product.
  5.	Edit product: Navigate to the product detail page of the product you want to edit, click on the "Edit" button, make the necessary changes and click the "Save"         button.
  6.	Delete product: Navigate to the product detail page of the product you want to delete, click on the "Delete" button and confirm the action.
# Technology Stack
  1.	React: A JavaScript library for building user interfaces.
  2.	Apollo Client: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
  3.	Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  4.	Prisma: A modern database toolkit for Node.js and TypeScript that provides an easy-to-use and type-safe way to handle databases.
  5.	GraphQL: A query language for APIs that provides a complete and understandable description of the data in an API.
  6.	Express.js: A minimal and flexible Node.js web application framework.
  7.	JWT: A JSON Web Token implementation for generating and verifying authentication tokens.
  8.	Material UI: Material UI is a popular open-source library of React components that implement Google's Material Design system.
# Endpoints
Authentication

    POST /auth/signup: Create a new user account. Requires a JSON body with the following properties:
        email (string): User's email address.
        password (string): User's password.
        Returns a JSON object with the following properties:
            user (object): User object with the following properties:
                id (string): User's ID.
                email (string): User's email address.
            token (string): JSON Web Token for the user session.

    POST /auth/login: Authenticate a user account. Requires a JSON body with the following properties:
        email (string): User's email address.
        password (string): User's password.
        Returns a JSON object with the following properties:
            user (object): User object with the following properties:
                id (string): User's ID.
                email (string): User's email address.
            token (string): JSON Web Token for the user session.
Products

    GET /products: Retrieve a list of all products.
        Returns a JSON array of product objects with the following properties:
            id (string): Product ID.
            name (string): Product name.
            description (string): Product description.
            price (number): Product price.
            image (string): Product image URL.

    POST /products: Create a new product. Requires authentication via JWT. Requires a JSON body with the following properties:
        name (string): Product name.
        description (string): Product description.
        price (number): Product price.
        image (string): Product image URL.
        Returns a JSON object with the following properties:
            id (string): Product ID.
            name (string): Product name.
            description (string): Product description.
            price (number): Product price.
            image (string): Product image URL.

    PUT /products/:id: Update an existing product. Requires authentication via JWT. Requires a JSON body with the following properties:
        name (string): Product name.
        description (string): Product description.
        price (number): Product price.
        image (string): Product image URL.
        Returns a JSON object with the following properties:
            id (string): Product ID.
            name (string): Product name.
            description (string): Product description.
            price (number): Product price.
            image (string): Product image URL.

    DELETE /products/:id: Delete an existing product. Requires authentication via JWT.
        Returns a JSON object with the following properties:
            id (string): Product ID.
            name (string): Product name.
            description (string): Product description.
            price (number): Product price.
            image (string): Product image URL.
# Note:
This project is not completed and fully functional.
