
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js';

// بارگذاری متغیرهای محیطی
dotenv.config();

const app = express();

// ===== اتصال به MongoDB =====
connectDB();

// ===== Middlewareها =====
app.use(express.json()); // برای خواندن JSON در درخواست‌ها
app.use(express.urlencoded({ extended: true })); // برای خواندن داده‌های فرم

// ===== روت‌ها (Routes) =====

// روت اصلی برای تست
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🏡 EstateHub API is running!',
        version: '1.0.0',
        endpoints: {
            properties: '/api/properties',
            property: '/api/properties/:id',
            search: '/api/properties/search?q=tehran'
        }
    });
});

// روت تست برای اطمینان از کارکرد API
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: '✅ API is working correctly!',
        timestamp: new Date().toISOString()
    });
});

// روت‌های مربوط به املاک
app.use('/api/properties', propertyRoutes);

// ===== مدیریت خطاهای 404 (مسیرهای پیدا نشده) =====
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `❌ مسیر ${req.originalUrl} پیدا نشد`,
        suggestion: 'مسیرهای موجود: /, /api/test, /api/properties'
    });
});

// ===== مدیریت خطاهای سرور =====
app.use((err, req, res, next) => {
    console.error('❌ Error:', err.stack);
    res.status(500).json({
        success: false,
        message: '❌ خطای داخلی سرور',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// ===== راه‌اندازی سرور =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`✅ MongoDB connection: ${process.env.MONGO_URI ? 'configured' : 'NOT configured!'}`);
});