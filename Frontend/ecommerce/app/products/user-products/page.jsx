"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductsTable from "./Partials/ProductsTable";
import { productService } from "@/services";

function ControlPanel() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productService
      .getUserProducts()
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
        console.log(products);
      })
      .catch((error) => {
        console.log("An error ocurred while fetching products");
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto mt-12 h-screen max-w-7xl p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Mis productos</h2>
        <div className="flex items-center space-x-4">
          <input
            className="h-10 w-80 rounded-md border border-gray-300 bg-white px-4 pr-10 outline-none placeholder:text-gray-700"
            placeholder="Buscar"
          />
          <Link
            href={"create"}
            className="rounded-xl bg-primary px-6 py-2 text-center text-white"
          >
            Añadir producto
          </Link>
        </div>
      </div>

      <hr className="mt-2 bg-slate-300" />
      {/* Contenido de elementos CRUD */}
      <div className="overflow-x-auto">
        {products.length !== 0 ? (
          <ProductsTable products={products} />
        ) : isLoading ? (
          <span>Cargando productos...</span>
        ) : (
          <span>No tienes productos</span>
        )}
      </div>
    </div>
  );
}

export default ControlPanel;
