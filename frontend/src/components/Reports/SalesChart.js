import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function SalesChart() {
const [sales, setSales] = useState([]);

useEffect(() => {
axios.get('/bills').then(res => setSales(res.data));
}, []);

const data = {
labels: sales.map(s => new Date(s.createdAt).toLocaleDateString()),
datasets: [{
label: 'Total Sales ₹',
data: sales.map(s => s.total),
borderColor: 'green',
tension: 0.3,
}],
};

return (
<div>
<h3>Sales Chart</h3>
<Line data={data} />
</div>
);
}

export default SalesChart;