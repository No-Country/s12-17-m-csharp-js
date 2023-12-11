import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
          <div className="flex flex-col items-start bg-white border border-black rounded-lg flex-column absolute left-0 top-0 mt-10 overflow-hidden">
            <h3 className="hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">
              Muebles
            </h3>
            <h3 className="border-t border-gray-700 hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">
              Celulares
            </h3>
            <h3 className="border-t border-gray-700 hover:text-white hover:scale-105 transition-transform hover:bg-primary text-center w-full px-4">Game</h3>
          </div>
        )}
      </button>
    </>
  );
}
export default Dropdown;
