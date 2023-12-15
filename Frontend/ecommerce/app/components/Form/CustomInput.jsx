import React from 'react'

const CustomInput = ({ isRequired, placeholder, register, registerName = "", type = "text", errors, errorsMessage }) => {
    return (
        <div>
            <input
                className="min-h-[35px] w-full border-1 border-black px-4"
                {...register(registerName)}
                type={type}
                placeholder={`${placeholder} ${isRequired ? "*" : ""}`}
            />

            <p className="text-[#FF0000] text-sm">{errors?.registerName?.message}</p>

        </div>
    )
}

export default CustomInput