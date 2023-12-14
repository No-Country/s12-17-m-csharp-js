const SelectInput = ({
  label,
  name,
  register,
  registerName,
  options = [],
  errors,
  // errorMessage,
  isRequired = true,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-semibold text-lg space-x-2">
        <span>{label}</span>
        {isRequired && <span className="text-red-500 text-xl">*</span>}
      </label>

      <select
        {...register(registerName)}
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

      <p className="text-[#FF0000] text-sm">{errors[registerName]?.message}</p>
    </div>
  );
};

export default SelectInput;
