import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';

function ProductList({ onAdd }) {
const [products, setProducts] = useState([]);

useEffect(() => {
axios.get('/products').then(res => setProducts(res.data));
}, []);

return (
<div>
<h3>Products</h3>
{products.map(p => (
<div key={p._id}>
{p.name} - ₹{p.price}
<button onClick={() => onAdd(p)}>Add</button>
</div>
))}
</div>
);
}

export default ProductList;