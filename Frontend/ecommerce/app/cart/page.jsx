"use client";

import { useForm } from "react-hook-form";
import SvgArrowLeft from "../components/icons/SvgArrowLeft";
import Image from "next/image";
import SvgButtonMinus from "../components/icons/SvgButtonMinus";
import SvgButtonPlus from "../components/icons/SvgButtonPlus";
import SvgDelete from "../components/icons/SvgDelete";

const CartPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
    };

    const products = [
        {
            name: "Mesa de Comedor Industria",
            count: 1234,
            price: 200,
            total: 200,
            img: "/assets/cart_product.jpg",
        },
        {
            name: "Mesa de Comedor Industria",
            count: 1234,
            price: 200,
            total: 200,
            img: "/assets/cart_product.jpg",
        },
        {
            name: "Mesa de Comedor Industria",
            count: 1234,
            price: 200,
            total: 200,
            img: "/assets/cart_product.jpg",
        },
        {
            name: "Mesa de Comedor Industria",
            count: 1234,
            price: 200,
            total: 200,
            img: "/assets/cart_product.jpg",
        },
        {
            name: "Mesa de Comedor Industria",
            count: 1234,
            price: 200,
            total: 200,
            img: "/assets/cart_product.jpg",
        }
    ]

    return (
        <>
            <section className="w-full max-w-[1920px] min-h-[456px] h-full mx-auto relative">

                <section className="w-full h-screen max-h-[456px] absolute z-[0]" style={{ background: 'linear-gradient(180deg, #026048 3.73%, #FEAF00 122.15%)' }} >
                </section>

                <section className="flex flex-col gap-y-4 relative z-[1] min-w-[90%] max-w-[90%] m-auto">

                    <section className="my-8">
                        <h2 className="text-[35px] text-[#FEAF00]">Carrito de compras</h2>
                        <h3 className="flex gap-4 text-[20px] text-[#FEAF00]"> <SvgArrowLeft /> Continuar comprando </h3>
                    </section>


                    <section className="w-full flex flex-row flex-wrap gap-8">
                        <table className="w-full max-w-[900px] rounded-[20px] shadow-sn gap-y-4" style={{ background: 'linear-gradient(180deg, #ffffff 0%, rgb(7 95 73 / 22%) 100%)' }}>

                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="p-[1rem]">Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products?.map((product, index) => (
                                        <tr key={`${product.name}-${index}`} className="text-center max-h-[100px] border-b-2 border-white">

                                            <td className="flex items-center gap-4 my-4 ml-8 max-w-[400px]">
                                                <Image src={product.img} width={80} height={80} alt="" />
                                                {product.name}
                                            </td>

                                            <td>$ {product.price}</td>

                                            <td className="h-full">
                                                <button className="align-middle mr-2 inline-flex items-center w-[25px] h-[25px] p-[8px] border-1 border-black rounded-[5px] justify-center">
                                                    <SvgButtonMinus />
                                                </button>

                                                {product.count}

                                                <button className="align-middle ml-2 inline-flex items-center w-[25px] h-[25px] p-[8px] border-1 border-black rounded-[5px] justify-center">
                                                    <SvgButtonPlus />
                                                </button>
                                            </td>

                                            <td className="h-full">$ {product.total}</td>

                                            <td className="h-full px-[1.5rem]"><SvgDelete /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <form className=" flex gap-4 flex-col w-full max-h-[320px] p-4 max-w-[380px] bg-[#FEAF00]">

                            <section className="flex gap-4 flex-col">
                            
                                <label className="text-[20px] text-[#151515] font-semibold" htmlFor="">¿Tiene un cupón?</label>
                                
                                <section className="grid grid-cols-2 gap-4">
                                    <input className="border-1 border-black bg-transparent w-[161px] h-[47px] p-4 text-[16px] placeholder:text-black placeholder:font-light " type="text" placeholder="Ingresa código" />
                                    <button type="button" className="border-1 border-black bg-black text-white w-[161px] h-[47px] text-[16px] text-white font-semibold">Canjear</button>
                                </section>
                            
                            </section>

                            <section className="flex justify-between my-4">
                                <h3 className="text-black font-medium text-[20px]">Subtotal</h3>
                                <p className="text-black font-medium text-[20px]">$1500</p>
                            </section>

                            <section className="flex justify-between">
                                <h3 className="text-black font-medium text-[20px]">Total</h3>
                                <p className="text-black font-medium text-[20px]">$1500</p>
                            </section>
                            
                            <button type="submit" className="border-1 border-black bg-black text-white w-full h-[47px] text-[16px] text-white font-semibold">Pagar</button>

                        </form>
                    </section>

                </section>

            </section>


        </>
    );
};
export default CartPage;
