"use client";
import Layout from "../components/Form/Layout";
import PopUp from "../components/Popup/PopUp";
import SocialButton from "../components/Form/SocialButton";
import TextInput from "../components/Form/TextInput";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { login_validations } from "../components/Form/Validations";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    setShowError(false);
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      console.error(res.error);
      setShowError(true);
    } else {
      setShowPopUp(true);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      {showPopUp && (
        <PopUp
          redirectTo="/"
          title={"Bienvenido"}
          description={"Revisa tu email para validar tu cuenta."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="w-5/12 mx-auto font-bold">
        {isLoading && <p>Cargando...</p>}
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
        {showError && (
          <span className="text-red-500">
            Las credenciales ingresadas no son correctas.
          </span>
        )}
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
