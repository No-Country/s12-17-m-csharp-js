"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductsTable from "./Partials/ProductsTable";
import { productService } from "@/services";

function ControlPanel() {
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productService
      .getUserProducts()
      .then((products) => {
        console.log(products);
        setProducts(products);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred while trying to get user products");
        console.error(error);
        // setIsLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto mt-12 h-screen max-w-7xl p-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Mis productos</h2>
        <div className="flex items-center space-x-4">
          <input
            className="h-10 w-80 rounded-md border border-gray-300 bg-white px-4 pr-10 outline-none placeholder:text-gray-700"
            placeholder="Buscar"
          />
          <Link
            href={"/products/create"}
            className="rounded-xl bg-primary px-6 py-2 text-center text-white"
          >
            Añadir producto
          </Link>
        </div>
      </div>

      <hr className="mt-3 bg-slate-300" />

      <div className="mt-4 overflow-x-auto text-lg">
        {/* {isLoading ? (
          <span>Cargando productos...</span>
        ) : products.length === 0 ? (
          <span>
            No tienes productos. Haz clic en &quot;Añadir producto&quot; para
            crear uno.
          </span>
        ) : ( */}
        <ProductsTable products={products} />
        {/* )} */}
      </div>
    </div>
  );
}

export default ControlPanel;
