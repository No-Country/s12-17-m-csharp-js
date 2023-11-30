"use client"

import Button from "../components/Form/Button";
import Layout from "../components/Form/Layout";
import SocialButton from "../components/Form/SocialButton";
import TextInput from "../components/Form/TextInput";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { useForm } from "react-hook-form";
import { register_validations } from "../components/Form/Validations";

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (watch("password") != watch("confirm_password")) {
      setError("confirm_password", {type:"custom", message: "La confirmación de contraseña no coincide con la contraseña ingresada."})
    }
    else {
      //Enviar data a endpoint
      console.log(data)
    }
  }

  return (
    <Layout>
      <div className="w-1/2 mx-auto">
        <div className="mt-20 mb-20">
          <h1 className="text-center font-bold  ">
            Regístrate para ser usuario
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput errorsMessage={register_validations[0]} errors={errors} register={register} registerName="name"             name="Nombres" required />
          <TextInput errorsMessage={register_validations[1]} errors={errors} register={register} registerName="lastname"         name="Apellidos" required />
          <TextInput errorsMessage={register_validations[2]} errors={errors} register={register} registerName="email"            name="Email" type="email" required />
          <TextInput errorsMessage={register_validations[3]} errors={errors} register={register} registerName="password"         name="Contraseña" type="password" required />
          <TextInput errorsMessage={register_validations[4]} errors={errors} register={register} registerName="confirm_password" name="Confirmar contraseña" type="password" required />

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
            <p className="flex items-center justify-center">
              <FaGoogle className="mr-2" /> Continuar con Google
            </p>{" "}
          </SocialButton>
          <SocialButton>
            {" "}
            <p className="flex items-center justify-center">
              <MdFacebook className="mr-2" />
              Continuar con Facebook
            </p>
          </SocialButton>
          <p className="text-center mt-10 mb-8">
            ¿Ya tienes contraseña? <a href="#">Ingresa</a>
          </p>
        </form>
      </div>
    </Layout>
  );
};
export default Page;
