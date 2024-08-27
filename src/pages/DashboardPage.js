import React from 'react';
import ProductDashboard from '../components/ProductDashboard';
import { PRODUCTS } from '../data/products';
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <ProductDashboard products={PRODUCTS} />
    </div>
  );
}

export default DashboardPage;
