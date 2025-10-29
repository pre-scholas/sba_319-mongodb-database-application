# SBA_319-mongo db-database-application

## Used Bike Sales API

A simple RESTful API for managing a collection of used bike listings, built with Node.js, Express, and MongoDB.

## Description

This project provides a backend service for a used bike sales application. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on bike listings.

## Features

- Connects to a MongoDB database using Mongoose.
- Provides RESTful API endpoints for managing bike data.
- Includes a seeding script to populate the database with initial data.
- Uses environment variables for configuration.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed.
- Access to a MongoDB database (either a local instance or a cloud-based one like MongoDB Atlas).

### Installation

1. **Clone the repository:**

    ```sh
    git clone <your-repository-url>
    cd sba_319-mongodb-database-application
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables. Replace the placeholder with your actual MongoDB connection string.

    ```env
    ATLAS_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    PORT=5050
    ```

### Running the Application

1. **Start the server:**

    ```sh
    npm start
    ```

    The server will start and listen on the port specified in your `.env` file (or 5050 by default). You should see the message `Listening on port: 5050!`.

2. **Seed the database (optional):**
    To populate the database with sample data, run the seed script:

    ```sh
    node seed/bike_seed.js
    ```

## API Endpoints

All endpoints are prefixed with `/api/bikes`.

### Get All Bikes

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves a list of all bikes.
- **Success Response:** `200 OK` with an array of bike objects.

### Get a Single Bike

- **URL:** `/:id`
- **Method:** `GET`
- **Description:** Retrieves a single bike by its ID.
- **Success Response:** `200 OK` with a single bike object.
- **Error Response:** `404 Not Found` if the bike doesn't exist.

### Create a New Bike

- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new bike to the collection.
- **Request Body:** A JSON object representing the bike.

    ```json
    {
        "make": "Cervelo",
        "model": "S5",
        "year": 2024,
        "price": 8000,
        "description": "Aero road bike, like new."
    }
    ```

- **Success Response:** `201 Created` with the newly created bike object.

### Update a Bike

- **URL:** `/:id`
- **Method:** `PATCH`
- **Description:** Updates an existing bike's information.
- **Request Body:** A JSON object with the fields to update.

    ```json
    {
        "price": 7500,
        "isSold": true
    }
    ```

- **Success Response:** `200 OK` with the updated bike object.
- **Error Response:** `404 Not Found` if the bike doesn't exist.

### Delete a Bike

- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Deletes a bike from the collection.
- **Success Response:** `200 OK` with a confirmation message.
- **Error Response:** `404 Not Found` if the bike doesn't exist.
