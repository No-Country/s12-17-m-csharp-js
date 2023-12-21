import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function DropdownOrders({ title, options }) {
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
          <div className="absolute right-0 top-0 z-40 mt-10 flex flex-col items-start overflow-hidden rounded-md border border-slate-500">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex w-full items-center justify-between whitespace-nowrap bg-white px-4 text-left font-bold"
              >
                <div>
                  <p>
                    {option.quantity}X {option.product.name}{" "}
                  </p>
                  <p>Total: ${parseFloat(option.subTotal).toFixed(2)}</p>
                </div>
                <div className="mx-4 flex h-20 w-20 items-center justify-center rounded-xl  bg-white">
                  <img
                    src={option.product.images[0].url}
                    className=" mx-4 h-full w-full object-contain"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
export default DropdownOrders;
