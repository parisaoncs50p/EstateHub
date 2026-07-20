
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// اتصال به دیتابیس
connectDB();

// Middlewareها
app.use(cors());
app.use(express.json());

// ===== تعریف مسیرها =====

// مسیر اصلی
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🏡 EstateHub API is running on Railway!',
        time: new Date().toISOString()
    });
});

// مسیر تست
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: '✅ API is working correctly!',
        endpoints: ['/api/properties', '/api/test', '/']
    });
});

// مسیر املاک - داده آزمایشی
app.get('/api/properties', (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: 1,
                title: 'ویلای لوکس در تهران',
                price: 15000000000,
                location: 'تهران، خیابان ولیعصر',
                bedrooms: 5,
                bathrooms: 4,
                area: 500
            },
            {
                id: 2,
                title: 'آپارتمان مدرن در اصفهان',
                price: 5000000000,
                location: 'اصفهان، خیابان چهارباغ',
                bedrooms: 3,
                bathrooms: 2,
                area: 120
            }
        ]
    });
});

// ===== مدیریت مسیرهای پیدا نشده =====
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `❌ مسیر ${req.originalUrl} پیدا نشد`,
        availableRoutes: ['/', '/api/test', '/api/properties']
    });
});

// ===== راه‌اندازی سرور =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`✅ API available at: http://localhost:${PORT}`);
});