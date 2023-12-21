import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import FilterField from "./FilterField";

const FilterSection = ({ title, options, name, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 flex flex-col gap-2">
      <span className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-info">{title}</h3>
        {isOpen ? (
          <IoIosArrowUp
            className="text-xl text-info transition-transform hover:scale-125 hover:cursor-pointer"
            onClick={toggleOpen}
          />
        ) : (
          <IoIosArrowDown
            className="text-xl text-info transition-transform hover:scale-125 hover:cursor-pointer"
            onClick={toggleOpen}
          />
        )}
      </span>
      {isOpen && (
        <>
          <div className="mt-4">
            <FilterField
              name={name}
              type="radio"
              value=""
              label="Todos"
              {...props}
            />
          </div>
          {options.map((option, index) => (
            <FilterField
              key={index}
              name={name}
              type="radio"
              value={option.value}
              label={option.label}
              {...props}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FilterSection;
