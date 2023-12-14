import { FaCheckCircle } from "react-icons/fa";

const RadioInput = ({
  label = "",
  name,
  register,
  registerName,
  children = null,
  ...props
}) => (
  <label className="flex items-center gap-2 text-lg mt-4">
    <input
      {...register(registerName)}
      name={name}
      className="w-4 h-4"
      type="radio"
      {...props}
    />
    {label ? <p className="font-medium">{label}</p> : children}
  </label>
);

export default RadioInput;
