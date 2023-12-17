import { useFormContext } from "react-hook-form";
const RadioInput = ({ label = "", name, children = null, ...props }) => {
  const { register } = useFormContext();
  return (
    <label className="mt-4 flex items-center gap-2 text-lg">
      <input
        {...register(name)}
        name={name}
        className="h-4 w-4"
        type="radio"
        {...props}
      />
      {label ? <p className="font-medium">{label}</p> : children}
    </label>
  );
};

export default RadioInput;
