// import mongoClient
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import e from 'express';
dotenv.config();



const connectionString = process.env.ATLAS_URI
const client = new MongoClient(connectionString);

// connect
let connection;

try {
    connection = await client.connect();
    console.log('connected to mongoDB Atlas');
} catch (err) {
    console.log('error connecting to mongoDB Atlas:', err.message);
} finally {
    await client.close();
    console.log('mongoDB connection closed');
}

const db = connection.db('bike_shop');
const bikesCollection = db.collection('bikes');

// export
export default db;