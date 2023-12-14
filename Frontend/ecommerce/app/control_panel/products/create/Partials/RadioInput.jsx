import { useFormContext } from "react-hook-form";
const RadioInput = ({ label = "", name, children = null, ...props }) => {
  const { register } = useFormContext();
  return (
    <label className="flex items-center gap-2 text-lg mt-4">
      <input
        {...register(name)}
        name={name}
        className="w-4 h-4"
        type="radio"
        {...props}
      />
      {label ? <p className="font-medium">{label}</p> : children}
    </label>
  );
};

export default RadioInput;
