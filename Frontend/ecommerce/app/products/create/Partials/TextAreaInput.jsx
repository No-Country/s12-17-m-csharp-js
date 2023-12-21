import { useFormContext } from "react-hook-form";

const TextAreaInput = ({
  label = "",
  name,
  placeholder = "",
  required = true,
  messageValidation = null,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-2">
      <label className="text-lg font-semibold">
        {label}
        <span className="text-red-500">{required && "*"}</span>
      </label>
      <textarea
        {...register(name)}
        name={name}
        required={required}
        rows={3}
        className="w-full rounded-md bg-black/10 px-4 py-3 text-gray-800"
        placeholder={placeholder}
        {...props}
      />
      {messageValidation && (
        <p className="text-sm text-[#696969]">{messageValidation}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
