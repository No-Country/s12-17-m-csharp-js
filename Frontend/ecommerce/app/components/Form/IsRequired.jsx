import React from "react";

const IsRequired = ({ children, isRequired }) => {
  return (
    <>
      {isRequired ? (
        <span>
          {children} <span className="text-red-500 text-xl">*</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};

export default IsRequired;
