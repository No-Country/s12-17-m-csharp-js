import React from "react";
import { useState } from "react";

const CustomDropdown = ({ options = [] }) => {
  const [activeDropdown, setActiveDropdown] = useState(true);
  const [isSelected, setIsSelected] = useState({
    selectedValue: "",
    selectedName: "Eliga una opción",
    defaultValue: "Eliga una opción",
  });

  const handleSelectedOption = (optionName, optionValue) => {
    console.log(optionValue, " - ", optionName);

    if (optionValue != isSelected.selectedValue) {
      setIsSelected({
        ...isSelected,
        selectedValue: optionValue,
        selectedName: optionName,
      });
    } else {
      setIsSelected({
        ...isSelected,
        selectedValue: "",
        selectedName: isSelected.defaultValue,
      });
    }

    setActiveDropdown(true);
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setActiveDropdown(!activeDropdown);
        }}
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="shadow-lg min-w-[200px] justify-between shadow-[#0000001a]hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {isSelected?.selectedName}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        className={`${
          activeDropdown == true ? "hidden" : ""
        } min-w-[200px]  absolute top-[110%] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 min-w-[200px] text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {options?.map((option, index) => (
            <li
              key={`${option?.name} - ${index}`}
              onClick={() => {
                handleSelectedOption(option?.name, option?.value);
              }}
              className={`block min-w-[200px] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                option?.value == isSelected.selectedValue ? "bg-slate-300" : ""
              }`}
            >
              {option?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
