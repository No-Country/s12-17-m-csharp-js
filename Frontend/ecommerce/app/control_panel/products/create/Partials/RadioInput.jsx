import { FaCheckCircle } from "react-icons/fa";

const RadioInput = ({ label = "", name, children = null, ...props }) => (
  <label className="flex items-center gap-2">
    <input name={name} className="w-4 h-4" type="radio" {...props} />
    {label ? <p className="font-medium">{label}</p> : children}
  </label>
);

export default RadioInput;
