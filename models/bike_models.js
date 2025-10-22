import mongoose from 'mongoose';



const bikeSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Make is required'],
        trim: true,
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        trim: true,
        
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be after 1900'],
        max: [new Date().getFullYear() + 1, 'Year cannot be more than one year in the future']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than 0']
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

bikeSchema.index({ make: 1, model: 1, year: 1 }, { unique: true });

const Bike = mongoose.model('Bike', bikeSchema);

export default Bike;