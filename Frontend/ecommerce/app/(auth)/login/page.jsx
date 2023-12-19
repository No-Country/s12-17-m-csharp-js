"use client";
import PopUp from "@/components/PopUp";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Layout, SocialButton, TextInput } from "../Partials";
import { MdFacebook } from "react-icons/md";
import { loginValidations } from "../Partials/Validations";
import { signIn } from "next-auth/react";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { userService } from "@/services";

const LoginPage = () => {
  const { ...methods } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    console.log("Form submitted");
    console.log(data);
    setShowError(false);
    const user = await userService.signIn({
      email: data.email,
      password: data.password,
    });
    console.log(user);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      token: user.token,
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
          description={"Bienvenido a la comunidad de SURSHOP."}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="mx-auto w-5/12 font-bold">
        {isLoading && <p>Cargando...</p>}
        <h1 className="text-4xl" onClick={methods.handleSubmit(onSubmit)}>
          Ingresar
        </h1>
        <h2 className="mt-12 space-x-6">
          <span className="text-xl">_________</span>
          <span className="text-base font-semibold">Ingresar con</span>
        </h2>
      </div>

      <div className="mt-8 flex justify-between gap-2 text-xs font-medium">
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
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mx-auto w-5/12"
        >
          <p className="my-5 text-center text-lg font-semibold">o</p>
          <TextInput
            label="Email"
            name="email"
            type="email"
            errorsMessage={loginValidations.email}
            errors={methods.formState.errors}
          />
          <TextInput
            label="Contraseña"
            name="password"
            errorsMessage={loginValidations.password}
            errors={methods.formState.errors}
            type="password"
          />
          {showError && (
            <span className="text-red-500">
              Las credenciales ingresadas no son correctas.
            </span>
          )}
          <div className="mb-4 mt-8">
            <button className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition duration-300 hover:bg-secondary">
              <FaArrowRight className="text-primary" size={20} />
            </button>
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};
export default LoginPage;
