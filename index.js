// imports
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import bikeRoutes from './routes/bike_routes.js';

const app = express()
const PORT = process.env.PORT || 5050
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/usedBikeSales';

// Database connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Connection error', err));


// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Used Bike Sales API.")
})

// Routes
app.use('/api/bikes', bikeRoutes)

// start sever
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}!`)
})
