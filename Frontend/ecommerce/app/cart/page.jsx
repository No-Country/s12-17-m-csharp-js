"use client";

import { useForm } from "react-hook-form";
import SvgArrowLeft from "../components/icons/SvgArrowLeft";
import Image from "next/image";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <>
            <section className="w-full max-w-[1440px] min-h-[456px] mx-auto relative">

                <section className="w-full h-screen max-h-[456px] absolute z-[0]" style={{ background: 'linear-gradient(180deg, #026048 3.73%, #FEAF00 122.15%);' }} ></section>

                <section className="flex flex-col relative z-[1] min-w-[90%] max-w-[90%] m-auto">
                    <section>
                        <h2>Carrito de compras</h2>
                        <h3 className="flex gap-2"> <SvgArrowLeft /> Continuar comprando </h3>
                    </section>

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src={"https://i.pinimg.com/564x/a4/d0/35/a4d035e2cf42bf0cb19c5b487f811faa.jpg"} width={200} height={200} alt="EJEMPLO"/>   Mesa de Comedor Industria
                                </td>
                                <td>1000</td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </section>


        </>
    );
};
export default LoginPage;
