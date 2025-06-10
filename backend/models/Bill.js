const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
{
items: [
{
productId: mongoose.Schema.Types.ObjectId,
name: String,
price: Number,
quantity: Number,
},
],
total: Number,
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
{ timestamps: true }
);

module.exports = mongoose.model('Bill', billSchema);