
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'عنوان ملک ضروری است'],
        trim: true,
        maxlength: [100, 'عنوان نباید بیشتر از ۱۰۰ کاراکتر باشد']
    },
    description: {
        type: String,
        required: [true, 'توضیحات ملک ضروری است'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'قیمت ملک ضروری است'],
        min: [0, 'قیمت نمی‌تواند منفی باشد']
    },
    location: {
        type: String,
        required: [true, 'آدرس ملک ضروری است'],
        trim: true
    },
    bedrooms: {
        type: Number,
        required: [true, 'تعداد اتاق‌خواب ضروری است'],
        min: [0, 'تعداد اتاق‌خواب نمی‌تواند منفی باشد']
    },
    bathrooms: {
        type: Number,
        required: [true, 'تعداد سرویس‌بهداشتی ضروری است'],
        min: [0, 'تعداد سرویس‌بهداشتی نمی‌تواند منفی باشد']
    },
    area: {
        type: Number,
        required: [true, 'متراژ ملک ضروری است'],
        min: [0, 'متراژ نمی‌تواند منفی باشد']
    },
    images: {
        type: [String],
        default: []
    },
    propertyType: {
        type: String,
        enum: {
            values: ['villa', 'apartment', 'office', 'shop', 'land'],
            message: 'نوع ملک باید یکی از این‌ها باشد: villa, apartment, office, shop, land'
        },
        default: 'apartment'
    },
    status: {
        type: String,
        enum: {
            values: ['available', 'sold', 'rented', 'reserved'],
            message: 'وضعیت باید یکی از این‌ها باشد: available, sold, rented, reserved'
        },
        default: 'available'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// ایجاد ایندکس برای جستجوی بهتر
propertySchema.index({ title: 'text', description: 'text', location: 'text' });

const Property = mongoose.model('Property', propertySchema);

export default Property;