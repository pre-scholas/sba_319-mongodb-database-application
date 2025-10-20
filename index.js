// imports
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 5050

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Used Bike Sales API.")
})

// start sever
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}!`)
})
