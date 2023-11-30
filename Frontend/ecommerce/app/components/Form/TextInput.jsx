const TextInput = ({ name, required = false, register, registerName, type, errors, errorsMessage, ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
                {name}{required && <span className="text-red-500">*</span>}
            </label>
            
            <input
                {...register(registerName, errorsMessage)}
                type={type}
                className="w-full border-b border-gray-300 rounded-none px-3 py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
            />

            <p className="text-[#FF0000] text-sm">{errors[registerName]?.message}</p>


        </div>

    )
}
export default TextInput