import { useFormContext } from "react-hook-form";

const TextInput = ({
  label = "",
  name,
  required = true,
  placeholder = "",
  children = null,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-2">
      {label ? (
        <p className="text-lg font-semibold">
          {label}
          <span className="text-red-500">{required && "*"}</span>
        </p>
      ) : (
        children
      )}
      <input
        {...register(name)}
        className={`w-full rounded-md bg-black/10 px-4 py-3 text-gray-800 ${props.className}`}
        type="text"
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};

export default TextInput;
