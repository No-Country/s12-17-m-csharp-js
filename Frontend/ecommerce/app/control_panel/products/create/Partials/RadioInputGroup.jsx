import RadioInput from "./RadioInput";
const RadioInputGroup = ({
  title,
  name,
  options,
  register,
  registerName,
  errors,
  // errorMessage,
}) => (
  <div className="mt-2">
    <p className="font-semibold text-lg">{title}</p>
    <div className="flex space-x-4">
      {options.map((option, index) => (
        <RadioInput
          key={index}
          name={name}
          register={register}
          registerName={registerName}
        >
          {option}
        </RadioInput>
      ))}
    </div>

    <p className="text-[#FF0000] text-sm">{errors[registerName]?.message}</p>
  </div>
);
export default RadioInputGroup;
