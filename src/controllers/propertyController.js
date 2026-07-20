
import Property from '../models/Property.js';

export const getProperties = async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });
        res.json({ success: true, data: properties });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json({ success: true, data: property });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ success: false, message: 'ملک یافت نشد' });
        }
        res.json({ success: true, data: property });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!property) {
            return res.status(404).json({ success: false, message: 'ملک یافت نشد' });
        }
        res.json({ success: true, data: property });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ success: false, message: 'ملک یافت نشد' });
        }
        res.json({ success: true, message: 'ملک حذف شد' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};