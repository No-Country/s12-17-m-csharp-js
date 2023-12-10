import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown(){
    const [isOpen,setIsOpen ]= useState(false);
    return (
        <>
        <div className="flex justify-center items-center">
            <button onClick={()=> setIsOpen((prev)=>!prev)}>
                <span className="mr-2">Categorias</span>
                {!isOpen ? (<AiOutlineCaretDown className='h-8'/>): (<AiOutlineCaretUp className='h-8'/>)}
                {isOpen &&<div className="bg-primary absolute top 20 flex flex-column items-start rounded-lg p-2 w-1/2">
                    <div>
                        <h3>Muebles</h3>
                        <h3>Celulares</h3>
                        <h3>Game</h3>
                    </div>  
                    </div>}
            </button>
        </div>
         
        </>

    );
}
export default Dropdown;