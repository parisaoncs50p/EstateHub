
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: Number, required: true },
    images: { type: [String], default: [] },
    propertyType: {
        type: String,
        enum: ['villa', 'apartment', 'office', 'shop', 'land'],
        default: 'apartment'
    },
    status: {
        type: String,
        enum: ['available', 'sold', 'rented', 'reserved'],
        default: 'available'
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Property', propertySchema);