import React from 'react';
import Billing from '../components/Billing/Billing';
import SalesChart from '../components/Reports/SalesChart';
import LowStockAlert from '../components/Products/LowStockAlert';

function Dashboard() {
return (
<div className="container">
<h2>Dashboard</h2>
<LowStockAlert />
<Billing />
<SalesChart />
</div>
);
}

export default Dashboard;