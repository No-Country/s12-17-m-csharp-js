const FilterField = ({ name, type, value, onChange, label }) => {
  return (
    <label className="flex justify-between">
      <span className="flex items-center gap-2">
        <input
          className="h-3.5 w-3.5 rounded-sm border-2 border-slate-500"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
        <span>{label}</span>
      </span>
    </label>
  );
};

export default FilterField;
