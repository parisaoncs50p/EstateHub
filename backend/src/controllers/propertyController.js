
import Property from '../models/Property.js';

// ===== دریافت همه املاک =====
export const getProperties = async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت املاک',
            error: error.message
        });
    }
};

// ===== دریافت یک ملک با ID =====
export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        
        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'ملک مورد نظر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            data: property
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت ملک',
            error: error.message
        });
    }
};

// ===== ایجاد ملک جدید =====
export const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        
        res.status(201).json({
            success: true,
            message: 'ملک با موفقیت ایجاد شد',
            data: property
        });
    } catch (error) {
        // اگر خطای اعتبارسنجی بود
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: 'خطا در اعتبارسنجی داده‌ها',
                errors: messages
            });
        }

        res.status(400).json({
            success: false,
            message: 'خطا در ایجاد ملک',
            error: error.message
        });
    }
};

// ===== بروزرسانی ملک =====
export const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true, // برگرداندن ملک بروز شده
                runValidators: true // اجرای اعتبارسنجی
            }
        );

        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'ملک مورد نظر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            message: 'ملک با موفقیت بروزرسانی شد',
            data: property
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'خطا در بروزرسانی ملک',
            error: error.message
        });
    }
};

// ===== حذف ملک =====
export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'ملک مورد نظر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            message: 'ملک با موفقیت حذف شد'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'خطا در حذف ملک',
            error: error.message
        });
    }
};

// ===== جستجوی املاک =====
export const searchProperties = async (req, res) => {
    try {
        const { q, minPrice, maxPrice, propertyType, bedrooms } = req.query;
        
        // ساخت شیء فیلتر
        const filter = {};
        
        if (q) {
            filter.$text = { $search: q };
        }
        
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        
        if (propertyType) {
            filter.propertyType = propertyType;
        }
        
        if (bedrooms) {
            filter.bedrooms = Number(bedrooms);
        }

        const properties = await Property.find(filter).sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'خطا در جستجوی املاک',
            error: error.message
        });
    }
};