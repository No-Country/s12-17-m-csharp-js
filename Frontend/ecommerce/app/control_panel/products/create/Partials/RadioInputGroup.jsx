import RadioInput from "./RadioInput";

const RadioInputGroup = ({ title, name, options }) => (
  <div className="flex items-center space-x-4 mt-4">
    <p className="font-semibold text-lg">{title}</p>
    {options.map((option, index) => (
      <RadioInput key={index} name={name}>
        {option}
      </RadioInput>
    ))}
  </div>
);
export default RadioInputGroup;
