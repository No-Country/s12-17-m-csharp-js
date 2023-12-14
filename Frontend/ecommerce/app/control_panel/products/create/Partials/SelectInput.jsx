import { useFormContext } from "react-hook-form";
const SelectInput = ({
  label,
  name,
  options = [],
  isRequired = true,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-semibold text-lg space-x-2">
        <span>{label}</span>
        {isRequired && <span className="text-red-500 text-xl">*</span>}
      </label>

      <select
        {...register(name)}
        name={name}
        className="text-gray-800 px-4 py-3 rounded-md w-full bg-black/10"
        {...props}
      >
        <option value="" hidden defaultChecked={true}></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
