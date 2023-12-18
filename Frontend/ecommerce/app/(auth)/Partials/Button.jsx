const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="mb-2 w-full rounded-md bg-secondary px-4 py-2 text-white transition duration-300 hover:scale-105 hover:bg-secondary hover:shadow-lg"
    >
      {children}
    </button>
  );
};
export default Button;
