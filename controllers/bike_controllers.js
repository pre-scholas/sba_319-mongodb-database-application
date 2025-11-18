import { ObjectId } from 'mongodb'
import db from '../db.js'
import Bike from '../models/bike_models'
// get all bikes
async function displayListOfBikesPage(req, res) {
    try {
        const bikes = await db.collection('bikes'); //creates bike variable with value = to listAllBikes
        const allBikes = await bikes.find().toArray();
        res.render('bikes/index', { allBikes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// get a single bike by ID
async function displaySingleBikePage(req, res) { 
    try {
        const bike = await Bike.findById(req.params.id);
        res.render('bikes/show', { bike });
        console.log(bike);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// POST a new Bike
// PATCH update a bike
// DELETE a bike
// renaming the function in the export
export default {
    displayListOfBikesPage,

}