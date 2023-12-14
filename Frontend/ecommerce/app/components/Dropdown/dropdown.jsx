"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // If clicked outside of dropdown, close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className="flex items-center justify-center relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="mr-2">Categorias</span>
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
        {isOpen && (
          <div className="flex flex-col items-start bg-white border border-black rounded-lg flex-column absolute left-0 top-0 mt-10 overflow-hidden z-50">
            <h3 className="hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">
              Muebles
            </h3>
            <h3 className="border-t border-gray-700 hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">
              Celulares
            </h3>
            <h3 className="border-t border-gray-700 hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">
              Game
            </h3>
          </div>
        )}
      </button>
    </div>
  );
}
export default Dropdown;
