import React from "react";
import IsRequired from "./IsRequired";

const TextAreaInput = ({
  label,
  placeholder,
  isRequired = false,
  messageValidation = null,
}) => {
  return (
    <div className="space-y-2">
      <p className="font-semibold  text-lg">
        <IsRequired isRequired={isRequired}>{label}</IsRequired>
      </p>

      <textarea
        className="text-gray-800 px-4 py-3 rounded-md w-full bg-black/10"
        placeholder={placeholder}
        name=""
        id=""
        rows={4}
      ></textarea>

      {messageValidation ? (
        <p className="text-sm text-[#696969] w-4/6">{messageValidation}</p>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
