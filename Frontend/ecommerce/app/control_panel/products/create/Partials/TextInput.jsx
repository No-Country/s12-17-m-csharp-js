import IsRequired from "@/app/components/Form/IsRequired";

const TextInput = ({
  label = "",
  isRequired = true,
  placeholder = "",
  messageValidation = null,
  children = null,
  register,
  registerName,
  errors,
  // errorMessage,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label ? (
        <p className="font-semibold text-lg">
          <IsRequired isRequired={isRequired}>{label}</IsRequired>
        </p>
      ) : (
        children
      )}
      <input
        {...register(registerName)}
        className={`text-gray-800 px-4 py-3 rounded-md w-full bg-black/10 ${props.className}`}
        type="text"
        placeholder={placeholder}
        required={isRequired}
        {...props}
      />

      {errors[registerName] && (
        <p className="text-sm text-red-500">{errors[registerName].message}</p>
      )}

      {messageValidation ? (
        <p className="text-sm text-[#696969]">{messageValidation}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
