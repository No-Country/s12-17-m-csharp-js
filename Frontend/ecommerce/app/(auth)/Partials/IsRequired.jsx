import React from "react";

const IsRequired = ({ children, isRequired }) => {
  return (
    <>
      {isRequired ? (
        <span>
          {children} <span className="text-xl text-red-500">*</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};

export default IsRequired;
