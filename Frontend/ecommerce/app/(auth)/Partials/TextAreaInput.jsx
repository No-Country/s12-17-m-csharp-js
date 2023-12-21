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
      <p className="text-lg  font-semibold">
        <IsRequired isRequired={isRequired}>{label}</IsRequired>
      </p>

      <textarea
        className="w-full rounded-md bg-black/10 px-4 py-3 text-gray-800"
        placeholder={placeholder}
        name=""
        id=""
        rows={4}
      ></textarea>

      {messageValidation ? (
        <p className="w-4/6 text-sm text-[#696969]">{messageValidation}</p>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
