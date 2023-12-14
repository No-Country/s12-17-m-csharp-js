import IsRequired from "@/app/components/Form/IsRequired";
import { useFormContext } from "react-hook-form";

const TextInput = ({
  label = "",
  name,
  isRequired = true,
  placeholder = "",
  children = null,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-2">
      {label ? (
        <p className="font-semibold text-lg">
          <IsRequired isRequired={isRequired}>{label}</IsRequired>
        </p>
      ) : (
        children
      )}
      <input
        {...register(name)}
        className={`text-gray-800 px-4 py-3 rounded-md w-full bg-black/10 ${props.className}`}
        type="text"
        placeholder={placeholder}
        required={isRequired}
        {...props}
      />
    </div>
  );
};

export default TextInput;
