const TextAreaInput = ({
  label = "",
  placeholder = "",
  isRequired = true,
  messageValidation = null,
  register,
  registerName,
  errors,
  // errorMessage,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="font-semibold text-lg">{label}</label>
      <textarea
        // {...register(registerName)}
        rows={3}
        className="text-gray-800 px-4 py-3 rounded-md w-full bg-black/10"
        placeholder={placeholder}
        {...props}
      />
      {errors[registerName] && (
        <p className="text-sm text-red-500">{errors[registerName].message}</p>
      )}
      {messageValidation && (
        <p className="text-sm text-[#696969]">{messageValidation}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
