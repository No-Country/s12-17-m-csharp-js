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

  const handleRemoveOneItem = productId => {
    // Lógica para eliminar uno de los productos del carrito
    useStore.getState().removeFromCart(productId);
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
      <h3 className="text-xl mb-4 text-[#FEAF00] flex"><img src='assets/arrow.svg' className='mr-4' ></img> Continuar Comprando</h3>
      <div className='flex'>

      <div className=" min-h-[600px] bg-[#EAEAEA] rounded-[20px] w-[916px] mt-20">
        <div className=' flex text-black text-xl font-bold h-[60px] items-center'>
          <p className=' w-2/5 ml-3'>Producto</p>
          <p className=' w-1/6 ml-3'>Precio</p>
          <p className=' w-1/6 ml-3'>Cantidad</p>
          <p className=' w-1/6 ml-3'>Total</p>
        </div>
        {cart.map(item => (
          <div key={item.id} className="border border-gray-300 p-2 flex h-[160px] items-center">
            <p className="font-semibold w-2/5 m-2">{item.title}</p>
            <p className=' w-1/6 m-2'>${item.price}</p>
            <div className="flex justify-between w-1/6">
              <button onClick={() => handleRemoveOne(item.id)} className="bg-[#EAEAEA] text-black border border-black px-2 mx-4 rounded h-7 w-7">-</button>
            <p>{item.quantity}</p>
              <button onClick={() => handleAddOne(item.id)} className="bg-[#EAEAEA] text-black border border-black px-2 mx-4 rounded h-7 w-7">+</button>
            </div>
           <p className=' w-1/6 m-2'>${item.quantity * item.price}</p>
           <button onClick={() => handleRemoveOneItem(item.id)}> <img src='assets/trash.svg' ></img></button>           
          </div>
        ))}
      </div>
          <div className='w-[350px] h-[150px] bg-[#FEAF00] ml-10 mt-60'>
            <div className='flex justify-between p-8 text-xl'>
        <p className="font-semibold">Total:</p>
        <p className="font-semibold">${Math.round(total*100)/100}</p>

            </div>
        {/* <button onClick={handleRemoveAll} className="bg-black text-white px-4 py-2 ">Eliminar Todos</button> */}
        <button onClick={handleCheckout} className="bg-black text-white w-[90%] flex mx-auto justify-center h-[46px] items-center">Continuar con la Compra</button>

          </div>
      </div>
      <div className="flex justify-between mt-8">
      </div>
    </div>
        </div>
  );
};

export default CartPage;