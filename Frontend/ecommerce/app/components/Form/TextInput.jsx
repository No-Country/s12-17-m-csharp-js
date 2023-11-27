const TextInput = ({ name, required = false, type, ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
                {name}{required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                type={type}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
        </div>
    )
}
export default TextInput