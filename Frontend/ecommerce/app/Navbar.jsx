"use client";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/useStore";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Logo } from "@/public/assets/img";
import { SlOptions } from "react-icons/sl";
import { routes } from "../constants/routes";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const cart = useStore((state) => state.cart);
  const { data: session } = useSession();
  const isLoggedIn = session?.user;

  const pathname = usePathname();
  const filteredRoutes = isLoggedIn
    ? routes
    : routes.filter((route) => !route.protected);

  return (
    <div className="flex h-16 w-full items-center justify-between">
      <div className="flex h-full items-center justify-between space-x-8">
        <Link
          href="/"
          className="h-full bg-secondary px-4 font-semibold text-white"
        >
          <Image
            style={{ height: "100%", width: "auto", padding: "0.375rem 0" }}
            src={Logo}
            alt="Logo"
            priority={true}
          />
        </Link>
        <div>
          <Dropdown />
        </div>
        <div className="flex items-center space-x-8 whitespace-nowrap">
          {filteredRoutes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className={`cursor-pointer underline underline-offset-[14px] transition-all hover:scale-105 hover:decoration-primary
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

      <div className="mx-8 flex h-full w-6/12 items-center justify-between">
        <div className="relative h-full py-3">
          <input
            className="h-full w-80 rounded-md bg-gray-200 px-4 outline-gray-500 placeholder:text-gray-700"
            placeholder="Buscar"
          />
          <IoIosSearch
            className="absolute right-2 top-5 text-primary"
            size={25}
          />
        </div>
        <span className="font-medium text-gray-300">|</span>
        <FaRegBell size={24} />
        <div className="relative">
          {cart.length !== 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
              {cart.length}
            </span>
          )}
          <Link href={"/cart"}>
            <IoCartOutline size={32} />
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <FaRegUserCircle size={26} />
            <button
              onClick={() => signOut()}
              className="rounded-full bg-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-secondary hover:text-black hover:decoration-inherit"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={`rounded-md p-2 font-medium underline underline-offset-[14px] transition-all hover:scale-105 hover:decoration-primary
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
              className={`rounded-full px-4 py-2 font-semibold text-black transition-colors hover:bg-secondary hover:text-black hover:decoration-inherit
            ${
              pathname === "/register"
                ? "bg-secondary text-black "
                : "bg-primary text-white "
            }`}
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
