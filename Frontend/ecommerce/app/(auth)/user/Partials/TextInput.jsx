import { useFormContext } from "react-hook-form";

const TextInputData = ({
  label = "",
  name,
  isRequired = true,
  placeholder = "",
  children = null,
  value = "",
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-1">
      {label ? <p className="text-sm font-semibold">{label}</p> : children}
      <input
        {...register(name)}
        className={` w-5/6 rounded-md bg-black/10 px-4 py-1 text-gray-800 ${props.className}`}
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        {...props}
      />
    </div>
  );
};

export default TextInputData;
