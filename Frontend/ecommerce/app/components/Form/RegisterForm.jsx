import React from 'react'
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

export default RegisterForm