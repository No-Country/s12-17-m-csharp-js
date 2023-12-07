"use client";

import Layout from "../components/Form/Layout";
import TextInput from "../components/Form/TextInput";
import SocialButton from "../components/Form/SocialButton";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { login_validations } from "../components/Form/Validations";
import { useForm } from "react-hook-form";
import { loginUser } from "../utils/api";
import { useState } from "react";
import PopUp from "../components/Popup/PopUp";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = async (data) => {
    try {
      const token = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log(token);

      setShowPopUp(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      {showPopUp && (
        <PopUp
          title={"Registro Exitoso!"}
          description={"Revisa tu email para validar tu cuenta."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="w-5/12 mx-auto font-bold">
        <h1 className="text-4xl" onClick={handleSubmit(onSubmit)}>
          Ingresar
        </h1>
        <h2 className="mt-12 space-x-6">
          <span className="text-xl">_________</span>
          <span className="font-semibold text-md">Ingresar con</span>
        </h2>
      </div>

      <div className="flex justify-between gap-2 mt-8 text-xs font-medium">
        <SocialButton>
          <p className="flex items-center justify-center whitespace-nowrap">
            <FaGoogle className="mr-2" size={18} />
            Continuar con Google
          </p>
        </SocialButton>
        <SocialButton>
          <p className="flex items-center justify-center whitespace-nowrap">
            <MdFacebook className="mr-2" size={23} /> Continuar con Facebook
          </p>
        </SocialButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/12 mx-auto">
        <p className="my-5 font-semibold text-center text-lg">o</p>
        <TextInput
          errorsMessage={login_validations[0]}
          errors={errors}
          register={register}
          registerName="email"
          name="Email"
          type="email"
        />
        <TextInput
          errorsMessage={login_validations[1]}
          errors={errors}
          register={register}
          registerName="password"
          name="Contraseña"
          type="password"
        />
        <div className="mt-8 mb-4">
          <button className="flex items-center justify-center mb-2 transition duration-300 rounded-full bg-secondary text-primary h-14 w-14 hover:bg-secondary-600">
            <FaArrowRight className="text-primary" size={20} />
          </button>
        </div>
      </form>
    </Layout>
  );
};
export default LoginPage;
