
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },

    // آدرس متنی (اختیاری) - جدا از مختصات نقشه
    location: { type: String },

    // مختصات انتخاب‌شده روی نقشه
    coordinates: {
        lat: { type: Number },
        lng: { type: Number },
    },

    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    parking: { type: Number, default: 0 },
    area: { type: Number, required: true },

    features: { type: [String], default: [] },
    images: { type: [String], default: [] },

    propertyType: {
        type: String,
        enum: ['apartment', 'villa', 'land', 'commercial'],
        default: 'apartment',
    },

    transactionType: {
        type: String,
        enum: ['sale', 'mortgage', 'rent'],
        required: true,
    },

    status: {
        type: String,
        enum: ['available', 'sold', 'rented', 'reserved'],
        default: 'available',
    },

    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Property', propertySchema);