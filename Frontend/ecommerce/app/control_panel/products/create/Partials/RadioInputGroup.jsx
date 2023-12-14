import RadioInput from "./RadioInput";

const RadioInputGroup = ({ label, name, options }) => {
  return (
    <div className="mt-2">
      <p className="font-semibold text-lg">{label}</p>
      <div className="flex space-x-4">
        {options.map((option, index) => (
          <RadioInput
            key={index}
            name={name}
            value={option}
          >
            {option}
          </RadioInput>
        ))}
      </div>
    </div>
  );
};
export default RadioInputGroup;
