
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// اتصال به MongoDB
connectDB();

// Middleware
app.use(express.json());

// روت پایه
app.get('/', (req, res) => {
    res.json({ message: 'EstateHub API is running!' });
});

// ===== روت‌های جدید =====
// روت تست دیتابیس
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// روت املاک (موقت برای تست)
app.get('/api/properties', (req, res) => {
    res.json([
        { id: 1, title: 'ویلای تست', price: 1000000000 },
        { id: 2, title: 'آپارتمان تست', price: 500000000 }
    ]);
});

// ===== بقیه کد =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});