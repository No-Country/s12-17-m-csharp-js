"use client";
import React from "react";
import useStore from "../../store/useStore";

const CartPage = () => {
  const cart = useStore((state) => state.cart); // Obtener el estado del carrito

  const handleAddOne = (productId) => {
    // Lógica para agregar un producto al carrito (incrementar cantidad)
  };

  const handleRemoveOne = (productId) => {
    // Lógica para quitar un producto del carrito (disminuir cantidad)
  };

  const handleRemoveAll = () => {
    // Lógica para eliminar todos los productos del carrito
    return null;
  };

  const handleCheckout = () => {
    // Lógica para continuar con el proceso de compra
    // Redireccionar a la página de checkout u otro lugar
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddOne(item.id)}>+</button>
            <button onClick={() => handleRemoveOne(item.id)}>-</button>
          </div>
        ))}
      </div>
      <button onClick={handleRemoveAll}>Eliminar Todos</button>
      <button onClick={handleCheckout}>Continuar con la Compra</button>
    </div>
  );
};

export default CartPage;
