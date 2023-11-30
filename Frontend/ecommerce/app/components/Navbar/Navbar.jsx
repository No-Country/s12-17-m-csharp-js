"use client";
import { SlOptions } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between w-full h-16">
      <div className="flex items-center justify-between space-x-8 h-full">
        <Link
          href="/"
          className="flex items-center h-full font-semibold text-white bg-secondary w-36 justify-end pr-4"
        >
          Nombre
        </Link>
        <div className="flex items-center space-x-8">
          <a className="cursor-pointer underline underline-offset-8 decoration-secondary">
            Nav Item
          </a>
          <a className="cursor-pointer ">Nav Item</a>
          <a className="cursor-pointer ">Nav Item</a>
          <span className="text-gray-300 text-2xl">|</span>
          <SlOptions className="text-gray-300" />
        </div>
      </div>

      <div className="flex items-center justify-between w-6/12 h-full mx-8">
        <div className="relative h-full py-3">
          <input
            className="h-full px-4 placeholder-gray-700 bg-gray-200 rounded-md w-80 outline-gray-500"
            placeholder="Buscar"
          />
          <IoIosSearch
            className="absolute top-5 right-2 text-primary"
            size={25}
          />
        </div>
        <span className="font-medium text-gray-300">|</span>
        <FaRegBell size={24} />
        <IoCartOutline size={32} />
        <Link
          href="/login"
          className={`p-2 font-semibold rounded-md transition-all
           ${
             pathname === "/login"
               ? "bg-secondary underline decoration-white text-white"
               : "text-black"
           } `}
        >
          Ingresar
        </Link>
        <Link
          href="/register"
          className={`px-4 py-2 font-semibold text-white rounded-full bg-primary transition-all ${
            pathname === "/register" &&
            "bg-secondary underline decoration-white"
          }`}
        >
          <span className="text-white">Registrarse</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
