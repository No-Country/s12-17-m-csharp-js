"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cartStore } from "@/store";
import { getToken } from "@/services/apiClient";


const CartPage = () => {
  const cart = cartStore((state) => state.cart); // Obtener el estado del carrito
  const router = useRouter();
  const [token, setToken] = useState(null);
  getToken().then((tok) => {
    if (tok) setToken(tok);
  });

  const handleAddOne = (productId) => {
    cartStore.getState().incrementQuantity(productId); // Incrementar cantidad de producto en el carrito
  };

  const handleRemoveOne = (productId) => {
    cartStore.getState().decrementQuantity(productId); // Decrementar cantidad de producto en el carrito
  };

  const handleRemoveOneItem = (productId) => {
    // Lógica para eliminar uno de los productos del carrito
    cartStore.getState().removeFromCart(productId);
  };

  const handleCheckout = () => {
    // Lógica para continuar con el proceso de compra
    // Redireccionar a la página de checkout u otro lugar
    token !== null ? router.push("/cart/pay") : router.push("/login");
  };

  // Calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  

  

  return (
    <div>
      <div className=" absolute h-[456px] w-full bg-gradient-to-b from-[#026048] to-[#FEAF00]"></div>
      <div className="container relative mx-auto px-4 py-8">
        <h1 className="mb-4 text-2xl text-[#FEAF00]">Carrito de Compras</h1>
        <h3 className="mb-4 flex text-xl text-[#FEAF00]">
          <Link href={"/products"}>
            <img src="assets/arrow.svg" className="mr-4"></img>
          </Link>
          Continuar Comprando
        </h3>
        <div className="flex">
          <div className=" mt-20 min-h-[600px] w-[916px] rounded-[20px] bg-[#EAEAEA] shadow-md">
            <div className=" flex h-[60px] items-center text-xl font-bold text-black">
              <p className=" ml-6 w-2/5">Producto</p>
              <p className=" ml-1 w-1/6">Precio</p>
              <p className=" ml-3 w-1/6">Cantidad</p>
              <p className=" ml-3 w-1/6">Total</p>
            </div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex h-[160px] items-center border border-gray-300 p-2"
              >
                <div className="m-2 flex w-2/5 items-center font-semibold">
                  <div className="mx-4 flex h-20 w-20 items-center justify-center rounded-xl border bg-white">
                    <img
                      src={item.images[0].url}
                      className=" mx-4 h-full w-full object-contain"
                    ></img>
                  </div>
                  <p>{item.name}</p>
                </div>
                <p className=" m-2 w-[15%]">${item.price}</p>
                <div className="flex w-1/6 justify-between">
                  <button
                    onClick={() => handleRemoveOne(item.id)}
                    className="mx-4 h-7 w-7 rounded border border-black bg-[#EAEAEA] px-2 text-black"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleAddOne(item.id)}
                    className="mx-4 h-7 w-7 rounded border border-black bg-[#EAEAEA] px-2 text-black"
                  >
                    +
                  </button>
                </div>
                <p className=" ml-8 w-1/6">${item.quantity * item.price}</p>
                <button onClick={() => handleRemoveOneItem(item.id)}>
                  <img src="assets/trash.svg"></img>
                </button>
              </div>
            ))}
          </div>
          <div className="ml-10 mt-60 h-[150px] w-[350px] bg-[#FEAF00]">
            <div className="flex justify-between p-8 text-xl">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold">${Math.round(total * 100) / 100}</p>
            </div>
            {token !== null ? (
              <button
                onClick={handleCheckout}
                disabled={total === 0}
                className={`mx-auto flex h-[46px] w-[90%] items-center justify-center bg-black text-white ${
                  total === 0
                    ? ""
                    : "transition-all hover:scale-[1.02] hover:decoration-gray-900"
                } `}
              >
                Continuar con la Compra
              </button>
            ) : (
              <button
                onClick={handleCheckout}
                className="mx-auto flex h-[46px] w-[90%] items-center justify-center bg-black text-white transition-all hover:scale-[1.02] hover:decoration-gray-900"
              >
                Ingresa a tu cuenta para Comprar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
