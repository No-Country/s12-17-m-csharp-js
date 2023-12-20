"use client";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Logo } from "@/public/assets/img";
import { cartStore } from "@/store";
import { categoryService } from "@/services";
import { routes } from "../constants/routes";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const cart = cartStore((state) => state.cart);
  const [categories, setCategories] = useState([]);

  const { data: session } = useSession();
  const isLoggedIn = session?.user;

  const pathname = usePathname();
  const filteredRoutes = isLoggedIn
    ? routes
    : routes.filter((route) => !route.protected);

  useEffect(() => {
    categoryService
      .getAllCategories()
      .then((categories) => {
        const updatedCategories = categories.map((category) => {
          return { ...category, route: `/products?category=${category.id}` };
        });
        setCategories(updatedCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex h-16 w-full items-center justify-between shadow-sm">
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
        </div>
        <Dropdown title="Categorías" options={categories} />
        {isLoggedIn && (
          <Dropdown
            title="Panel de control"
            options={[
              { name: "Mis productos", route: "/products/user-products" },
              { name: "Mis compras", route: "/products/user-orders" },
            ]}
          />
        )}
      </div>
      <div className="mx-4 flex h-full items-center justify-end gap-8">
        {pathname === "/supermarket" && (
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
        )}
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
            <Link href={"/user"}>
              <FaRegUserCircle size={26} />
            </Link>
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
