"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import SvgArrowLeft from "@/app/components/icons/SvgArrowLeft";
import CustomInput from "@/app/components/Form/CustomInput";
import CustomDropdownCheckout from "@/app/components/Form/CustomDropdownCheckout";


const Checkout = () => {
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
            <section className="w-full max-w-[1920px] min-h-[456px] h-full mx-auto relative">

                <section className="w-full h-screen max-h-[456px] absolute z-[0]" style={{ background: 'linear-gradient(180deg, #026048 3.73%, #FEAF00 122.15%)' }} >
                </section>

                <section className="flex flex-col gap-y-4 relative z-[1] min-w-[90%] max-w-[90%] m-auto">

                    <section className="my-8">
                        <h2 className="text-[35px] text-[#FEAF00]">Carrito de compras</h2>
                        <h3 className="flex gap-4 text-[20px] text-[#FEAF00]"> <SvgArrowLeft /> Continuar comprando </h3>
                    </section>


                    <form className="grid gap-[2rem] w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}>

                        <section className="p-[2rem] bg-[#FAFAFA] rounded-[20px] flex gap-[1.5rem] flex-col">

                            <CustomInput
                                isRequired={true}
                                placeholder={"Nombres"}
                                registerName={"name"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={true}
                                placeholder={"Apellidos"}
                                registerName={"lastname"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={false}
                                placeholder={"Email"}
                                type="email"
                                registerName={"email"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <section className="grid grid-cols-2 gap-4">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Calle"}
                                    registerName={"street"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Casa"}
                                    registerName={"house"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <section className="grid grid-cols-2  gap-4">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Código"}
                                    registerName={"postalCode"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Provincia"}
                                    registerName={"province"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <CustomDropdownCheckout
                                options={[
                                    { name: "Option 1", value: "Option 1" },
                                    { name: "Option 2", value: "Option 2" },
                                ]}
                            />

                            <div>
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Número de telefóno"}
                                    registerName={"province"}
                                    type="tel"
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                                <h5 className="text-[12px] text-[#828282D9] mt-4">*Todos los campos requeridos</h5>
                            </div>

                        </section>

                        <section>

                            <CustomInput
                                isRequired={true}
                                placeholder={"Nombres"}
                                registerName={"name"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={true}
                                placeholder={"Apellidos"}
                                registerName={"lastname"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={false}
                                placeholder={"Email"}
                                type="email"
                                registerName={"email"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <section className="grid grid-cols-2">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Calle"}
                                    registerName={"street"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Casa"}
                                    registerName={"house"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <section className="grid grid-cols-2">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Código"}
                                    registerName={"postalCode"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Provincia"}
                                    registerName={"province"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <CustomDropdownCheckout
                                options={[
                                    { name: "Option 1", value: "Option 1" },
                                    { name: "Option 2", value: "Option 2" },
                                ]}
                            />

                            <CustomInput
                                isRequired={true}
                                placeholder={"Número de telefóno"}
                                registerName={"province"}
                                type="tel"
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                        </section>

                        <section>

                            <CustomInput
                                isRequired={true}
                                placeholder={"Nombres"}
                                registerName={"name"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={true}
                                placeholder={"Apellidos"}
                                registerName={"lastname"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <CustomInput
                                isRequired={false}
                                placeholder={"Email"}
                                type="email"
                                registerName={"email"}
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                            <section className="grid grid-cols-2">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Calle"}
                                    registerName={"street"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Casa"}
                                    registerName={"house"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <section className="grid grid-cols-2">
                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Código"}
                                    registerName={"postalCode"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />

                                <CustomInput
                                    isRequired={true}
                                    placeholder={"Provincia"}
                                    registerName={"province"}
                                    register={register}
                                    errors={errors}
                                    errorsMessage={{}}
                                />
                            </section>

                            <CustomDropdownCheckout
                                options={[
                                    { name: "Option 1", value: "Option 1" },
                                    { name: "Option 2", value: "Option 2" },
                                ]}
                            />

                            <CustomInput
                                isRequired={true}
                                placeholder={"Número de telefóno"}
                                registerName={"province"}
                                type="tel"
                                register={register}
                                errors={errors}
                                errorsMessage={{}}
                            />

                        </section>

                    </form>

                </section>

            </section>


        </>
    );
};
export default Checkout;
