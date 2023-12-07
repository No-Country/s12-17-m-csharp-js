import RadioInput from "./RadioInput";

const RadioInputGroup = ({ title, name, options }) => (
  <>
    <p className="mt-8 font-medium">{title}</p>
    <div className="mt-3 space-y-3">
      {options.map((option, index) => (
        <RadioInput key={index} name={name}>
          {option}
        </RadioInput>
      ))}
    </div>
  </>
);
export default RadioInputGroup;
