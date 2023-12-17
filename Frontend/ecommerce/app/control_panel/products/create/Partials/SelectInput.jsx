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
      <label htmlFor={name} className="space-x-2 text-lg font-semibold">
        <span>{label}</span>
        {isRequired && <span className="text-xl text-red-500">*</span>}
      </label>

      <select
        {...register(name)}
        name={name}
        className="w-full rounded-md bg-black/10 px-4 py-3 text-gray-800"
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
