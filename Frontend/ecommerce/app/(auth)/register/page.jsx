"use client";
import Link from "next/link";
import PopUp from "@/components/PopUp";
import userService from "@/services/userService";
import { FaGoogle } from "react-icons/fa";
import { FormProvider, useForm } from "react-hook-form";
import { MdFacebook } from "react-icons/md";
import { SocialButton, TextInput, Layout, Button } from "../Partials";
import { registerValidations } from "../Partials/Validations";
import { signIn } from "next-auth/react";
import { useState } from "react";

const RegisterPage = () => {
  const { ...methods } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    setShowError(false);
    if (methods.watch("password") !== methods.watch("passwordConfirmation")) {
      methods.setError("passwordConfirmation", {
        type: "custom",
        message:
          "La confirmación de contraseña no coincide con la contraseña ingresada.",
      });
    } else {
      try {
        setIsLoading(true);
        const user = await userService.signUp({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });

        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          token: user.token,
          redirect: false,
        });

        if (res.error) {
          throw new Error(res.error);
        }

        setShowPopUp(true);
      } catch (error) {
        setShowError(true);
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
          description={"Bienvenido a la comunidad de SURSHOP."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="mx-auto my-16 w-1/2">
        {isLoading && <p>Cargando...</p>}
        <h1 className="w-full text-center text-4xl font-bold">
          Regístrate para ser usuario
        </h1>
        {showError && (
          <p className="mb-4 text-red-500">
            Ocurrió un error al intentar registrarse.
          </p>
        )}

        <FormProvider {...methods}>
          <form className="mt-12" onSubmit={methods.handleSubmit(onSubmit)}>
            <TextInput
              label="Nombres"
              name="firstName"
              errorsMessage={registerValidations.firstName}
            />
            <TextInput
              label="Apellidos"
              name="lastName"
              errorsMessage={registerValidations.lastName}
            />
            <TextInput
              label="Email"
              name="email"
              errorsMessage={registerValidations.email}
              type="email"
            />
            <TextInput
              label="Contraseña"
              name="password"
              errorsMessage={registerValidations.password}
              type="password"
            />
            <TextInput
              label="Confirmar contraseña"
              name="passwordConfirmation"
              errorsMessage={registerValidations.passwordConfirmation}
              type="password"
            />
            <div className="my-10">
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
            <p className="mb-8 mt-10 text-center">
              ¿Ya tienes contraseña?{" "}
              <Link href="/login" className="ml-2 font-medium text-sky-500">
                Ingresa
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default RegisterPage;
