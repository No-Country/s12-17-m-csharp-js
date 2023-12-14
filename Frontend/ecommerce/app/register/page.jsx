"use client";
import Button from "../components/Form/Button";
import Layout from "../components/Form/Layout";
import Link from "next/link";
import PopUp from "../components/Popup/PopUp";
import SocialButton from "../components/Form/SocialButton";
import TextInput from "../components/Form/TextInput";
import userService from "@/services/userService";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { register_validations } from "../components/Form/Validations";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    if (watch("password") != watch("confirm_password")) {
      setError("confirm_password", {
        type: "custom",
        message:
          "La confirmación de contraseña no coincide con la contraseña ingresada.",
      });
    } else {
      try {
        setIsLoading(true);
        await userService.signUp({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });

        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (res.error) {
          throw new Error(res.error);
        }

        setShowPopUp(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Layout>
      {showPopUp && (
        <PopUp
          redirectTo="/"
          title={"Registro Exitoso!"}
          description={"Revisa tu email para validar tu cuenta."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="w-1/2 mx-auto my-16">
        {isLoading && <p>Cargando...</p>}
        <h1 className="w-full text-4xl font-bold text-center">
          Regístrate para ser usuario
        </h1>

        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            errorsMessage={register_validations[0]}
            errors={errors}
            register={register}
            registerName="firstName"
            name="Nombres"
            required
          />
          <TextInput
            errorsMessage={register_validations[1]}
            errors={errors}
            register={register}
            registerName="lastName"
            name="Apellidos"
            required
          />
          <TextInput
            errorsMessage={register_validations[2]}
            errors={errors}
            register={register}
            registerName="email"
            name="Email"
            type="email"
            required
          />
          <TextInput
            errorsMessage={register_validations[3]}
            errors={errors}
            register={register}
            registerName="password"
            name="Contraseña"
            type="password"
            required
          />
          <TextInput
            errorsMessage={register_validations[4]}
            errors={errors}
            register={register}
            registerName="confirm_password"
            name="Confirmar contraseña"
            type="password"
            required
          />

          <div className="mt-10 mb-10">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              He leido y acepto los términos de servicio y nuestra politica de
              privacidad
            </label>
          </div>
          <Button>Crear cuenta</Button>
          <SocialButton>
            {" "}
            <p className="flex items-center justify-center whitespace-nowrap">
              <FaGoogle className="mr-2" size={18} />
              Continuar con Google
            </p>
          </SocialButton>
          <SocialButton>
            <p className="flex items-center justify-center whitespace-nowrap">
              <MdFacebook className="mr-2" size={23} />
              <span className="-mr-4">Continuar con Facebook</span>
            </p>
          </SocialButton>
          <p className="mt-10 mb-8 text-center">
            ¿Ya tienes contraseña?{" "}
            <Link href="/login" className="ml-2 font-medium text-sky-500">
              Ingresa
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
