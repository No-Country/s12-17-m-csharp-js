import { useFormContext } from "react-hook-form";
//
const TextInput = ({
  label,
  name,
  required = true,
  errorsMessage,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        {...register(name, errorsMessage)}
        {...props}
        name={name}
        className="w-full rounded-none border-b border-gray-300 px-3 py-2 focus:border-b-2 focus:border-blue-500 focus:outline-none"
        required={required}
      />
      {errors[name] && (
        <p className="text-sm text-[#FF0000]">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  );
};
export default TextInput;
