const Bill = require('../models/Bill');
const Product = require('../models/Product');

exports.createBill = async (req, res) => {
const { items, total } = req.body;

const bill = new Bill({
items,
total,
createdBy: req.user.id,
});

await bill.save();

// Reduce stock
for (const item of items) {
await Product.findByIdAndUpdate(item.productId, {
$inc: { stock: -item.quantity },
});
}

res.json(bill);
};

exports.getAllBills = async (req, res) => {
const bills = await Bill.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
res.json(bills);
};