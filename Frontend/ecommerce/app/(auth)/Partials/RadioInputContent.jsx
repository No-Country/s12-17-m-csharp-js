import React from "react";
import IsRequired from "./IsRequired";

const RadioInputContent = ({
  options,
  groupName = "",
  isRequired = false,
  label = "",
  messageValidation = null,
}) => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold">
        <IsRequired isRequired={isRequired}>{label}</IsRequired>
      </p>

      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-4">
          <input
            className="w-5"
            type="radio"
            name={groupName}
            value={option.value}
            id={`${groupName}-${option.value}`}
          />

          <label htmlFor={`${groupName}-${option.value}`} className="text-lg">
            {option.name}
          </label>
        </div>
      ))}

      {messageValidation ? (
        <p className="w-4/6 text-sm text-[#696969]">{messageValidation}</p>
      ) : null}
    </div>
  );
};

export default RadioInputContent;
