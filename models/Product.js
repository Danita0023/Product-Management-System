const mongoose = require('mongoose');

// สร้าง Schema และ Model
const ProductSchema = new mongoose.Schema({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    product_stock: Number
});

module.exports = mongoose.model('Product', ProductSchema)