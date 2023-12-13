"use client";

import React from 'react';
import useStore from '../store/useStore';

const CartPage = () => {
  const cart = useStore(state => state.cart); // Obtener el estado del carrito

  const handleAddOne = productId => {
    useStore.getState().incrementQuantity(productId); // Incrementar cantidad de producto en el carrito
  };

  const handleRemoveOne = productId => {
    useStore.getState().decrementQuantity(productId); // Decrementar cantidad de producto en el carrito
  };

  const handleRemoveAll = () => {
    // Lógica para eliminar todos los productos del carrito
    // Puedes utilizar la función removeFromCart del useStore si está definida
    useStore.getState().removeAllFromCart();
  };

  const handleCheckout = () => {
    // Lógica para continuar con el proceso de compra
    // Redireccionar a la página de checkout u otro lugar
  };

  // Calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div className=' bg-gradient-to-b from-[#026048] to-[#FEAF00] h-[456px] absolute w-full'></div>
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-2xl mb-4 text-[#FEAF00]">Carrito de Compras</h1>
      <h3 className="text-l mb-4 text-[#FEAF00]">Continuar Comprando</h3>
      <div className=" min-h-[600px] bg-[#EAEAEA] rounded-[20px] max-w-[916px]">
        <div className=' flex text-black text-xl font-bold'>
          <p className=' w-2/5 m-4'>Producto</p>
          <p className=' w-1/6 m-4'>Precio</p>
          <p className=' w-1/6 m-4'>Cantidad</p>
          <p className=' w-1/6 m-4'>Total</p>
        </div>
        {cart.map(item => (
          <div key={item.id} className="border border-gray-300 p-4">
            <p className="font-semibold">{item.title}</p>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <div className="flex justify-between mt-2">
              <button onClick={() => handleRemoveOne(item.id)} className="bg-red-500 text-white px-2 rounded">-</button>
              <button onClick={() => handleAddOne(item.id)} className="bg-green-500 text-white px-2 rounded">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={handleRemoveAll} className="bg-red-500 text-white px-4 py-2 rounded">Eliminar Todos</button>
        <p className="font-semibold">Total: ${total}</p>
        <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">Continuar con la Compra</button>
      </div>
    </div>
        </div>
  );
};

export default CartPage;