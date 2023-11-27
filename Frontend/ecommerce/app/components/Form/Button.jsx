const Button = ({ children }) => {
    return (
        <button
            type="submit"
            className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
        >
            {children}
        </button>
    )
}
export default Button