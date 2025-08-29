const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    views: { type: Number, default: 0 } // El contador de vistas
});

module.exports = mongoose.model('Product', ProductSchema);