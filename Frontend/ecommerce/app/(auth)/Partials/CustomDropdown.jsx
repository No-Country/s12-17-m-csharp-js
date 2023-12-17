import React, { useState } from "react";

const CustomDropdown = ({ options = [] }) => {
  const [activeDropdown, setActiveDropdown] = useState(true);
  const [isSelected, setIsSelected] = useState({
    selectedValue: "",
    selectedName: "Eliga una opción",
    defaultValue: "Eliga una opción",
  });

  const handleSelectedOption = (optionName, optionValue) => {
    console.log(optionValue, " - ", optionName);

    if (optionValue !== isSelected.selectedValue) {
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
        className="shadow-[#0000001a]hover:bg-slate-300 inline-flex min-w-[200px] items-center justify-between rounded-lg px-5 py-2.5 text-center text-sm font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
        type="button"
      >
        {isSelected?.selectedName}
        <svg
          className="ms-3 h-2.5 w-2.5"
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
          activeDropdown === true ? "hidden" : ""
        } absolute  top-[110%] z-10 w-44 min-w-[200px] divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className="min-w-[200px] py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {options?.map((option, index) => (
            <li
              key={`${option?.name} - ${index}`}
              onClick={() => {
                handleSelectedOption(option?.name, option?.value);
              }}
              className={`block min-w-[200px] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                option?.value === isSelected.selectedValue ? "bg-slate-300" : ""
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
