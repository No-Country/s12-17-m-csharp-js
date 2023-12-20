import { useFormContext } from "react-hook-form";

const FilterField = ({ name, type, value, label, ...props }) => {
  const { register } = useFormContext();

  return (
    <label className="flex justify-between">
      <span className="flex items-center gap-2">
        <input
          {...register(name)}
          className="h-3.5 w-3.5 rounded-sm border-2 border-slate-500"
          name={name}
          type={type}
          value={value}
          {...props}
        />
        <span>{label}</span>
      </span>
    </label>
  );
};

export default FilterField;
