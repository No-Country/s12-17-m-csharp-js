const TextInput = ({ label = "", children = null, ...props }) => {
  return (
    <div className="space-y-2">
      {label ? <p className="font-medium">{label}</p> : children}
      <input
        className={`text-gray-800 px-4 py-3 rounded-md w-full bg-black/10 ${props.className}`}
        type="text"
      />
    </div>
  );
};
export default TextInput;
