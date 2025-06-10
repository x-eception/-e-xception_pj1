import React, { useState } from 'react';
import axios from '../../utils/axiosInstance';
import ProductList from '../Products/ProductList';
import ReceiptPrint from './ReceiptPrint';

function Billing() {
const [cart, setCart] = useState([]);
const [billId, setBillId] = useState(null);

const addToCart = (product) => {
const exists = cart.find(p => p._id === product._id);
if (exists) {
setCart(cart.map(p => p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p));
} else {
setCart([...cart, { ...product, quantity: 1 }]);
}
};

const checkout = async () => {
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
const res = await axios.post('/bills', { items: cart, total });
setBillId(res.data._id);
alert('Bill created');
};

return (
<div className="container">
<h2>Billing</h2>
<ProductList onAdd={addToCart} />
<hr />
<h3>Cart</h3>
{cart.map(item => (
<div key={item._id}>
{item.name} x {item.quantity} = ₹{item.quantity * item.price}
</div>
))}
<button onClick={checkout}>Checkout</button>
<ReceiptPrint cart={cart} billId={billId} />
</div>
);
}

export default Billing;