import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-[#e4e4e4] p-4 h-[300px] relative overflow-hidden group transition">
      <div className='h-full flex flex-col justify-between'>
        <div className='flex justify-center items-center mb-4'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={product.image} alt={product.name} className="max-h-[160px] group-hover:scale-110 transition duration-300" />
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
            Añadir al carro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;