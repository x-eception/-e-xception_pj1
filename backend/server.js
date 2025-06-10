const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const billRoutes = require('./routes/billRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bills', billRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log('MongoDB connected');
app.listen(process.env.PORT || 5000, () =>
console.log('Server running on port', process.env.PORT || 5000)
);
})
.catch((err) => console.log(err));

console.log('JWT_SECRET:', process.env.JWT_SECRET);