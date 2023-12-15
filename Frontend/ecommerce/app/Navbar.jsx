"use client";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { routes } from "./constants/routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between w-full h-16 max-w-[1920px] mx-auto">
      <div className="flex items-center justify-between h-full space-x-8">
        <Link
          href="/"
          className="flex items-center justify-end h-full pr-4 font-semibold text-white bg-secondary w-36"
        >
          Nombre
        </Link>
        <div className="flex items-center space-x-8 whitespace-nowrap">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className={`cursor-pointer underline underline-offset-[14px] hover:decoration-primary hover:scale-105 transition-all
               ${
                 pathname === route.path
                   ? "decoration-secondary"
                   : "decoration-white"
               }`}
            >
              {route.name}
            </Link>
          ))}
          <span className="text-2xl text-gray-300">|</span>
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
          className={`p-2 font-medium rounded-md transition-all underline underline-offset-[14px] hover:scale-105 hover:decoration-primary
          ${
            pathname === "/login"
              ? "decoration-secondary"
              : "text-black decoration-white"
          } `}
        >
          Ingresar
        </Link>
        <Link
          href="/register"
          className={`px-4 py-2 font-semibold rounded-full text-black hover:bg-secondary hover:text-black transition-colors hover:decoration-inherit 
          ${
            pathname === "/register"
              ? "bg-secondary text-black "
              : "bg-primary text-white "
          }`}
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
