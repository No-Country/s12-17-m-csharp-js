const TextInput = ({ name, required = false, type, ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
                {name}{required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                type={type}
                className="w-full border-b border-gray-300 rounded-none px-3 py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
            />
        </div>
    )
}
export default TextInput