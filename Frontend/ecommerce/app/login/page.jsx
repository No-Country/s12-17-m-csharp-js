"use client"

import Button from "../components/Form/Button";
import Layout from "../components/Form/Layout";
import TextInput from "../components/Form/TextInput";
import SocialButton from "../components/Form/SocialButton";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { login_validations } from "../components/Form/Validations";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      console.log(data)
  }

  return (
    <Layout>
      <div className="w-1/2 mx-auto">
          <div className="mt-20 mb-20 font-bold">
            <h1>Ingresar</h1>
          </div>
          <h2 className=" mb-10 font-bold">_____ Ingresar con</h2>
      </div>

      <div className="flex  justify-between mt-10">
        <div className="mr-4">
          <SocialButton>
            <p className="flex items-center justify-center">
              <FaGoogle className="mr-2" /> Continuar con Google
            </p>
          </SocialButton>
        </div>
        <div className="ml-4">
          <SocialButton>
            <p className="flex items-center justify-center">
              <MdFacebook className="mr-2" /> Continuar con Google
            </p>
          </SocialButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
          <p className="text-center mt-10 mb-8 font-bold">o</p>
          <div className="mb-4">
            <TextInput errorsMessage={login_validations[0]} errors={errors} register={register} registerName="email"      name="Email" type="email" />
            <TextInput errorsMessage={login_validations[1]} errors={errors} register={register} registerName="password"   name="Password" type="password" />
          </div>
          <div className="mt-16 mb-4">
            <button className=" bg-secondary text-primary rounded-full h-14 w-14 hover:bg-secondary-600 transition duration-300 mb-2 flex items-center justify-center">
              <FaArrowRight className="text-primary" size={20} />
            </button>
          </div>
      </form>
    </Layout>
  );
};
export default Page;
