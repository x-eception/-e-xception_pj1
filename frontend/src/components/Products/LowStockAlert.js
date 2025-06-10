import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';

function LowStockAlert() {
const [lowStock, setLowStock] = useState([]);

useEffect(() => {
axios.get('/products/low-stock').then(res => setLowStock(res.data));
}, []);

return (
<div>
<h4>Low Stock Items</h4>
<ul>
{lowStock.map(item => (
<li key={item._id}>{item.name} - {item.stock} left</li>
))}
</ul>
</div>
);
}

export default LowStockAlert;