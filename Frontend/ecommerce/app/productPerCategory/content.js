"use client"
import React, { useState, useEffect } from 'react';


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [priceRange, setPriceRange] = useState('');

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
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    // Aplicar filtros cuando cambien los valores de la barra lateral
    filterProducts();
  }, [category, condition, priceRange]);

  const filterProducts = () => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (condition) {
      filtered = filtered.filter(product => product.condition === condition);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(parseFloat);
      filtered = filtered.filter(product => {
        const productPrice = parseFloat(product.price);
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <Sidebar
          setCategory={setCategory}
          setCondition={setCondition}
          setPriceRange={setPriceRange}
        />
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ setCategory, setCondition, setPriceRange }) => {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="bg-white-200 w-64 mr-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-16 mt-8">Filtrar</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categoría</h3>
          <select className="p-2 mb-2" onChange={handleCategoryChange}>
              <option value="">Todos</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Condición</h3>
          <select className="p-2 mb-2" onChange={handleConditionChange}>
              
            {/* Opciones de condición */}
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Rango de precios</h3>
          <select className="p-2" onChange={handlePriceRangeChange}>
          <option value="">Todos</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            {/* Opciones de rango de precios */}
          </select>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="border border-[#e4e4e4] p-4 h-[300px] relative overflow-hidden group transition">
      <div className='h-full flex flex-col justify-between'>
        <div className='flex justify-center items-center mb-4'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={product.image} alt={product.title} className="max-h-[160px] group-hover:scale-110 transition duration-300" />
          </div>
        </div>
        <div className='text-center'>
          <h2 className="text-md font-semibold mb-2">{product.title}</h2>
          <p className="text-blue-500 mt-2">${product.price}</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            Comprar
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-gray-300 ml-4 hover:bg-green-600 focus:outline-none">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductsPage, Sidebar, ProductCard };