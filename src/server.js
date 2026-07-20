
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js';

dotenv.config();

const app = express();

// اتصال به دیتابیس
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// روت‌ها
app.get('/', (req, res) => {
    res.json({
        message: '🏡 EstateHub API is running!',
        version: '1.0.0'
    });
});

app.get('/api/test', (req, res) => {
    res.json({ message: '✅ API is working correctly!' });
});

app.use('/api/properties', propertyRoutes);

// مدیریت 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `❌ مسیر ${req.originalUrl} پیدا نشد`
    });
});

// مدیریت خطاها
app.use((err, req, res) => {
    console.error('❌ Error:', err.stack);
    res.status(500).json({
        success: false,
        message: '❌ خطای داخلی سرور'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});