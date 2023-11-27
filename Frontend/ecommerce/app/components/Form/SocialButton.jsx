const SocialButton = ({ children }) => {
    return (
        <button
            type="submit"
            className=" bg-transparent text-black border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
        >
            {children}
        </button>
    )
}
export default SocialButton