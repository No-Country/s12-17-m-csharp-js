import React from "react";

const IsRequired = ({ children, isRequired }) => {
  return (
    <>
      {isRequired ? (
        <span>
          {children} <span className="text-[#F43F5E] text-xl">*</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};

export default IsRequired;
