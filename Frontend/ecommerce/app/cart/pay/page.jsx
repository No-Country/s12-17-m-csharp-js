"use client";
import { CardPayment, initMercadoPago } from '@mercadopago/sdk-react';
import React, { useState } from 'react'
import Link from "next/link";
import orderService from '../../../services/orderService'
import { cartStore } from '@/store';
import PopUp from '@/components/PopUp';

initMercadoPago('TEST-82b567dc-56fd-47b9-905f-f408d62ef452', {
  locale: 'es-AR'
});

const PayPage = () => {

  const cart = cartStore(state => state.cart); // Obtener el estado del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [showPopUp, setShowPopUp] = useState(false);

  const initialization = {
    amount: Math.round((total * 100) / 100),
    payer: {
      email: '<PAYER_EMAIL_HERE>',
    },
  };


  const onSubmit = async (formData) => {
    const renglones = [];
    cart.forEach(prod => {
      renglones.push({
        "productoId": prod.id,
        "cantidad": prod.quantity,
        "unidad": prod.unit
      })
                .catch((error) => {
                    // manejar la respuesta de error al intentar crear el pago
                    reject();
                });
    });
    };

    const data = {
      ...formData,
      renglones
    }
    await orderService.postOrder(data)
    setShowPopUp(true);
  };

  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };


  const onReady = async () => {
    /*
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    */
  };

  const customization = {
    visual: {

      style: {
        customVariables: {
          borderRadiusLarge: '20px',
          formBackgroundColor: '#fafafa',
        }
      }

    }
  };

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div>
      {showPopUp && (
        <PopUp
          redirectTo="/"
          title={"¡Tu pago fue acreditado de manera exitosa!"}
          description={"Te enviamos tu comprobante de pago via e-mail y tu numero de seguimiento de envío."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className=' absolute h-[456px] w-full bg-gradient-to-b from-[#026048] to-[#FEAF00]'></div>
      <div className="container relative mx-auto px-4 py-8">
        <h1 className="mb-4 text-2xl text-[#FEAF00]">Pagar</h1>
        <h3 className="mb-4 flex text-xl text-[#FEAF00]"><Link href={"/cart"}><img src='../assets/arrow.svg' className='mr-4' ></img></Link>  Volver al Carrito</h3>
        <div className='mt-20 flex justify-around'>
          <div className=' w-2/5 rounded-[20px] shadow-md'>

            <CardPayment
              initialization={initialization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
              customization={customization}
            />
          </div>
          <div className='w-2/5'>

            <div className=" min-h-[600px] rounded-[20px] bg-[#fafafa] shadow-md">
              <div className=' flex h-[60px] items-center text-xl font-bold text-black'>
                <p className=' ml-6 w-3/5'>Producto</p>
                <p className=' ml-3 w-1/4'>Total</p>
              </div>
              {cart.map(item => (
                <div key={item.id} className="flex h-[120px] items-center border border-gray-300 p-2">
                  <div className="m-2 flex w-3/5 items-center font-semibold">
                    <div className='mx-4 flex h-20 w-20 items-center justify-center rounded-xl border bg-white'>
                      <img src={item.images[0].url} className=' mx-4 h-full w-full object-contain'></img>
                    </div>
                    <div>
                      <p >{item.quantity}X</p>
                      <p >{item.name}</p>
                    </div>
                  </div>
                  <p className=' ml-8 w-1/4'>${item.quantity * item.price}</p>
                </div>
              ))}
              <div className='flex justify-between p-8 text-xl'>
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">${Math.round(total * 100) / 100}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )

}

export default PayPage
