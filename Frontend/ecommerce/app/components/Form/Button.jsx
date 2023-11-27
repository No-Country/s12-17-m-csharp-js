const Button = ({ children }) => {
    return (
        <button
            type="submit"
            className=" bg-secondary text-white rounded-md px-4 py-2 hover:bg-secondary-600 transition duration-300 w-full"
        >
            {children}
        </button>
    )
}
export default Button