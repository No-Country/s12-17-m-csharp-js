const SocialButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="mb-2 w-full rounded-xl border border-gray-300 bg-transparent px-12 py-3 text-black
      transition-colors hover:bg-black hover:text-white
      "
    >
      {children}
    </button>
  );
};
export default SocialButton;
