// seed imports
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Bike from '../models/bike_models.js';

// load environment variables
dotenv.config();

// Sample data
const sampleBikes = [
    {
        make: 'Cannondale',
        model: 'Topstone 1',
        year: 2023,
        price: 1800,
        description: 'Barely used gravel bike with Shimano GRX groupset',
        isAvailable: true,
        isSold: false,
        createdAt: new Date('2025-09-15T12:30:00Z'),
    },
    {
        make: 'Trek',
        model: 'FX 3 Disc',
        year: 2022,
        price: 850,
        description: 'Hybrid bike, perfect for city commuting. Recently serviced.',
        isSold: false,
        createdAt: new Date('2025-09-15T12:30:00Z'),
    },
    {
        make: 'Specialized',
        model: 'Turbo Vado 4.0',
        year: 2021,
        price: 3200,
        description: 'E-bike with low mileage. Includes a battery and charger.',
        isSold: true,
        createdAt: new Date('2025-08-10T15:45:00Z'),
    },
    {
        make: 'Giant',
        model: 'Talon 4',
        year: 2024,
        price: 700,
        description: 'Mountain bike for beginners. Excellent condition, only ridden on trails a few times.',
        isSold: false,
        createdAt: new Date('2025-09-25T09:00:00Z'),
    },
    {
        make: 'Marin',
        model: 'Nicasio',
        year: 2020,
        price: 1100,
        description: 'Steel frame road bike with a comfortable ride. Some cosmetic scratches.',
        isSold: true,
        createdAt: new Date('2025-08-20T11:20:00Z'),
    },
    {
        make: 'Surly',
        model: 'Cross-Check',
        year: 2018,
        price: 950,
        description: 'Versatile touring/gravel bike. Ready for a new adventure.',
        isSold: false,
        createdAt: new Date('2025-10-05T14:00:00Z'),
    },
];

// Function to seed the database
async function seedDB() {
    try {
        // connect to MongoDB Atlas
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('connected to mongoDB Atlas for seeding.');

        // clear existing bikes from the collection
        await Bike.deleteMany({});
        console.log('existing bikes deleted.');

        // insert new sample bikes
        await Bike.insertMany(sampleBikes);
        console.log('sample bikes inserted successfully.')
    } catch (err) {
        console.log('error seeding database:', err.message);
    } finally {
        // close the database connection
        mongoose.connection.close();
        console.log('mongoDB connection closed');
    }
}

// run the seed function
seedDB()