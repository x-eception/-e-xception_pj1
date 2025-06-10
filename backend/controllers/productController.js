const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
const products = await Product.find();
res.json(products);
};

exports.getLowStock = async (req, res) => {
const products = await Product.find({ stock: { $lt: 5 } });
res.json(products);
};

exports.createProduct = async (req, res) => {
const product = new Product(req.body);
await product.save();
res.json(product);
};