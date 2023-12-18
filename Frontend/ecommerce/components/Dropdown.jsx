"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Link from "next/link";

function Dropdown({ options }) {
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
        className="relative flex items-center justify-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="mr-2">Categorias</span>
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
        {isOpen && (
          <div className="absolute left-0 top-0 z-40 mt-10 flex flex-col items-start">
            {options.map((option) => (
              <Link
                key={option.id}
                href={option.route}
                className="w-full px-4 text-center transition-transform hover:scale-105 hover:bg-primary hover:text-white"
              >
                {option.name}
              </Link>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
export default Dropdown;
