// imports
import express from 'express'
import Bike from '../models/bike_models.js';

const router = express.Router();

// GET all bikes
router.get('/', async (req, res) => {
    try {
        const bikes = await Bike.find();
        res.status(200).json(bikes);
    } catch (err) {
        console.log(err.message)
        res.send({ error: err.message})
    }
})
// Get a single bike by ID
router.get('/:id', async (req, res) => {
    try {
        const bike = await Bike.findById(req.params.id)
        if (bike == null) {
            return res.status(404).json({ message: 'Cannot find bike' });
        }
        res.status(200).json(bike)
    } catch (err) {
        console.log(err.message)
        res.send({ error: err.message })
    }
})
// POST a new bike
router.post('/', async (req, res) => {
    const bike = new Bike({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    });
    try {
        const newBike = await bike.save();
        res.status(201).json(newBike);
    } catch (err) {
        console.log(err.message)
        res.send({ error: err.message })
    }
})

// PATCH update a bike
router.patch('/:id', async (req, res) => {
    try {
        const bike = await Bike.findById(req.params.id);
        if (bike == null) {
            return res.status(404).json({ message: 'Cannot find bike' });
        }
        // Update fields if they exist in the request body
        Object.assign(bike, req.body);
        const updatedBike = await bike.save();
        res.status(200).json(updatedBike);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// DELETE a bike
router.delete('/:id', async (req, res) => {
    try {
        const deletedBike = await Bike.findByIdAndDelete(req.params.id);
        if (deletedBike == null) {
            return res.status(404).json({ message: 'Cannot find bike' })
        }
        res.status(200).json({ message: 'Deleted bike' })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
// export router
export default router;