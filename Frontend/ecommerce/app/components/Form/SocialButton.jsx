const SocialButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full px-12 py-3 mb-2 text-black bg-transparent border border-gray-300 rounded-xl
      hover:bg-black hover:text-white transition-colors
      "
    >
      {children}
    </button>
  );
};
export default SocialButton;
