"use client";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BiPurchaseTag } from "react-icons/bi";
import { BsBagDash } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";
import ProductsTable from "./Partials/ProductsTable";
import { productService } from "@/services";

function ControlPanel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getUserProducts().then((products) => {
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sección de cabecera */}
      <div
        className="w-1/5 p-4 text-black"
        style={{
          background:
            "linear-gradient(to bottom, rgba(252, 163, 17, 1), rgba(20, 33, 61, 0.6))",
        }}
      >
        <div>
          <h2 className="mb-10 flex items-center font-bold">
            {" "}
            <TbMinusVertical className="mr-2" />
            Perfil
          </h2>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          {/* <img
            src="avatar.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-2"
          /> */}
          <span>Nombre</span>
        </div>

        <nav className=" mt-16 flex items-center justify-center">
          <ul>
            <li className="mb-5 flex cursor-pointer items-center py-1 text-white hover:text-green-500">
              {" "}
              <BsBagDash className="mr-2" />
              Ventas
            </li>
            <li className="mb-5 flex cursor-pointer items-center py-1 text-white hover:text-green-500">
              <BiPurchaseTag className="mr-2" />
              Compras
            </li>
            <li className="mb-5 flex cursor-pointer items-center py-1 text-white hover:text-green-500">
              <FaMoneyBills className="mr-2" />
              Subscripciones
            </li>
            <li className="mb-5 flex cursor-pointer items-center py-1 text-white hover:text-green-500">
              <CgProfile className="mr-2" />
              Mi perfil
            </li>
            <li className="mb-5 flex cursor-pointer items-center py-1 text-white hover:text-green-500">
              {" "}
              <CiSettings className="mr-2" /> Configuración
            </li>
            {/* Otros enlaces */}
          </ul>
        </nav>
        <div className="mt-28 flex cursor-pointer items-center justify-center">
          {" "}
          salir <FaSignOutAlt className="ml-24" />{" "}
        </div>
      </div>

      {/* Barra de navegación y sección de administrar elementos */}
      <main className="w-full bg-white p-8">
        <div className="flex h-16 justify-end py-3">
          <input
            className="h-full w-80 rounded-md border border-gray-300 bg-white px-4 pr-10 outline-none placeholder:text-gray-700"
            placeholder="Buscar"
          />
        </div>
        <header className="mb-8 flex items-center justify-between border-b border-gray-300 p-4">
          <h2 className="text-xl font-bold">Mis productos</h2>
          <Link
            href={"/control_panel/products/create"}
            className="rounded-full bg-primary px-4 py-2 text-center text-white"
          >
            Añadir producto
          </Link>
        </header>
        {/* Contenido de elementos CRUD */}
        <div className="overflow-x-auto">
          {products.length !== 0 ? (
            <ProductsTable products={products} />
          ) : (
            <span>Cargando productos...</span>
          )}
        </div>
      </main>
    </div>
  );
}

export default ControlPanel;
