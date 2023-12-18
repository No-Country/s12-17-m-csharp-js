import IsRequired from "@/app/(auth)/Partials/IsRequired";
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
        <p className="text-lg font-semibold">
          <IsRequired isRequired={isRequired}>{label}</IsRequired>
        </p>
      ) : (
        children
      )}
      <input
        {...register(name)}
        className={`w-full rounded-md bg-black/10 px-4 py-3 text-gray-800 ${props.className}`}
        type="text"
        placeholder={placeholder}
        required={isRequired}
        {...props}
      />
    </div>
  );
};

export default TextInput;
