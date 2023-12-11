"use client"
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import ProductsPage from './content';

const YourPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ProductsPage />
    </div>
  );
};

export default YourPage;