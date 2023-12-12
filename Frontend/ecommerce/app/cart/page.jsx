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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <div className="grid grid-cols-3 gap-4">
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
  );
};

export default CartPage;