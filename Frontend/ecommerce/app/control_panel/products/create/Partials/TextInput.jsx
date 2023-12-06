import IsRequired from "@/app/components/Form/IsRequired";

const TextInput = ({ label = "", isRequired = false, placeholder = "", messageValidation = null, children = null, ...props }) => {
  return (
    <div className="space-y-2">
      {label ?
        <p className="font-bold text-xl">
          <IsRequired isRequired={isRequired}>
            {label}
          </IsRequired>
        </p> :
        children
      }
      <input
        className={`text-gray-800 px-4 py-3 rounded-md w-full bg-black/10 ${props.className}`}
        type="text"
        placeholder={placeholder}
      />

      {
        messageValidation ?
          <p className='text-sm text-[#696969]' >
            {messageValidation}
          </p>
          :
          null
      }
    </div>
  );
};
export default TextInput;
