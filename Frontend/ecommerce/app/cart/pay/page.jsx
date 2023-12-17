"use client";
import { CardPayment } from '@mercadopago/sdk-react';
import React from 'react'
import Link from "next/link";
import { initMercadoPago } from '@mercadopago/sdk-react'
import useStore from '@/app/store/useStore';
initMercadoPago('TEST-82b567dc-56fd-47b9-905f-f408d62ef452', {
    locale: 'es-AR'
});

const payPage = () => {
    const cart = useStore(state => state.cart); // Obtener el estado del carrito

    const initialization = {
        amount: 100,
        payer: {
            email: '<PAYER_EMAIL_HERE>',
        },
    };


    const onSubmit = async (formData) => {
        alert('Estamos procesando tu pago')
        // callback llamado al hacer clic en el botón enviar datos
        return new Promise((resolve, reject) => {
            fetch('https://localhost:7051/api/mercadopago', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((response) => {
                    // recibir el resultado del pago
                    resolve();
                })
                .catch((error) => {
                    // manejar la respuesta de error al intentar crear el pago
                    reject();
                });
        });
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
                    formBackgroundColor:'#fafafa',
                }
            }

        }
    };

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

    return (
        <div>
            <div className=' bg-gradient-to-b from-[#026048] to-[#FEAF00] h-[456px] absolute w-full'></div>
            <div className="container mx-auto px-4 py-8 relative">
                <h1 className="text-2xl mb-4 text-[#FEAF00]">Pagar</h1>
                <h3 className="text-xl mb-4 text-[#FEAF00] flex"><Link href={"/cart"}><img src='../assets/arrow.svg' className='mr-4' ></img></Link>  Volver al Carrito</h3>
                <div className='flex justify-around mt-20'>
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

                        <div className=" min-h-[600px] bg-[#fafafa] rounded-[20px] shadow-md">
                            <div className=' flex text-black text-xl font-bold h-[60px] items-center'>
                                <p className=' w-3/5 ml-6'>Producto</p>
                                <p className=' w-1/4 ml-3'>Total</p>
                            </div>
                            {cart.map(item => (
                                <div key={item.id} className="border border-gray-300 p-2 flex h-[120px] items-center">
                                    <div className="font-semibold w-3/5 m-2 flex items-center">
                                        <div className='w-20 h-20 bg-white flex justify-center items-center mx-4 border rounded-xl'>

                                            <img src={item.imagenes[0].url} className=' w-full h-full object-contain mx-4'></img>
                                        </div>
                                        <div>
                                            <p >{item.quantity}X</p>
                                            <p >{item.nombre}</p>
                                        </div>
                                    </div>

                                    <p className=' w-1/4 ml-8'>${item.quantity * item.precio}</p>
                                </div>
                            ))}
                            <div className='flex justify-between p-8 text-xl'>
        <p className="font-semibold">Total:</p>
        <p className="font-semibold">${Math.round(total*100)/100}</p>

            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default payPage
