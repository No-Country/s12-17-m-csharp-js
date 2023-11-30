"use client";
import Link from "next/link";
import Button from "../components/Form/Button";
import Layout from "../components/Form/Layout";
import SocialButton from "../components/Form/SocialButton";
import TextInput from "../components/Form/TextInput";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { register_validations } from "../components/Form/Validations";
import { useForm } from "react-hook-form";
import { registerUser } from "../utils/api";
import { useState } from "react";
import PopUp from "../components/Popup/PopUp";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmit = async (data) => {
    if (watch("password") != watch("confirm_password")) {
      setError("confirm_password", {
        type: "custom",
        message:
          "La confirmación de contraseña no coincide con la contraseña ingresada.",
      });
    } else {
      console.log(data);
      try {
        const token = await registerUser({
          email: data.email,
          first_name: data.name,
          last_name: data.lastname,
          password: data.password,
        });
        console.log(token);

        setShowPopUp(true);
      } catch (error) {
        console.error(error);
      }
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
      <div className="w-1/2 mx-auto my-16">
        <h1 className="w-full text-2xl font-medium">
          Regístrate para ser usuario
        </h1>

        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            errorsMessage={register_validations[0]}
            errors={errors}
            register={register}
            registerName="name"
            name="Nombres"
            required
          />
          <TextInput
            errorsMessage={register_validations[1]}
            errors={errors}
            register={register}
            registerName="lastname"
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
