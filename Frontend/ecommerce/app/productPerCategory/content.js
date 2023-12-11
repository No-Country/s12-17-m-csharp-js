"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';


const ProductsPage = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Lógica para obtener datos de la base de datos
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }, []);
  
    return (
      <div className="container mx-auto py-8">
        
        <h1 className="text-3xl font-bold mb-4">Productos</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsPage;