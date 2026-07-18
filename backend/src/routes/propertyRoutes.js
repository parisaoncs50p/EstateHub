
import express from 'express';
import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
    searchProperties
} from '../controllers/propertyController.js';

const router = express.Router();

// روت‌های عمومی
router.get('/', getProperties);
router.get('/search', searchProperties);
router.get('/:id', getPropertyById);

// روت‌های مدیریتی (در آینده احراز هویت اضافه میشه)
router.post('/', createProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

export default router;