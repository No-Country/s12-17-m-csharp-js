import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 p-4 h-full flex flex-col justify-between">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <div>
        <h2 className="text-md font-semibold mb-2">{product.text}</h2>
        <p className="text-gray-600 h-16 overflow-hidden">{product.description}</p>
        <p className="text-blue-500 mt-2">${product.price}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;