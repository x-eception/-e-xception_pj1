const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name: String,
price: Number,
stock: Number,
category: String,
barcode: String, // optional
});

module.exports = mongoose.model('Product', productSchema);