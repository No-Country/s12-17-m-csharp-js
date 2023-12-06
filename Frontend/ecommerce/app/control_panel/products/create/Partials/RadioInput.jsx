import { FaCheckCircle } from "react-icons/fa";

const RadioInput = ({ label = "", name, children = null, ...props }) => (
  <label
    className={`group flex items-center p-3 rounded-md bg-black/10 hover:bg-black/20 transition-colors hover:cursor-pointer ${props.className}`}
  >
    <input
      name={name}
      className="relative w-4 h-4 mt-1 appearance-none peer shrink-0"
      type="radio"
      {...props}
    />
    <FaCheckCircle className="w-4 h-4 mr-8 border-black rounded-full fill-none border-1 group-hover:fill-black group-hover:border-0 peer-checked:fill-black peer-checked:border-0" />
    {label ? <p className="font-medium">{label}</p> : children}
  </label>
);

export default RadioInput;