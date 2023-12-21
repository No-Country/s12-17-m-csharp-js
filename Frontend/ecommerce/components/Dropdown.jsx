"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Link from "next/link";

function Dropdown({ title, options }) {
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
        className="relative flex items-center justify-center space-x-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="whitespace-nowrap">{title}</span>
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
        {isOpen && (
          <div className="absolute left-0 top-0 z-10 mt-10 flex flex-col items-start overflow-hidden rounded-md border border-slate-500 bg-white">
            {options.map((option) => (
              <Link
                key={option.id ?? option.name}
                href={option.route}
                className="w-full whitespace-nowrap px-4 text-left transition-transform hover:scale-105 hover:bg-primary hover:text-white"
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
