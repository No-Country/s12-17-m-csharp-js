"use client";
// import { useState, useEffect, useMemo, useCallback } from "react";
import { useState, useEffect } from "react";
import { productService } from "@/services";
import { ProductCard, Sidebar } from "./Partials";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState("");
  // const [condition, setCondition] = useState("");
  // const [priceRange, setPriceRange] = useState("");

  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [searchParams]
  // );

  // const categoryId = searchParams.get("categoryId");
  // const brandId = searchParams.get("brandId");
  // const productCondition = searchParams.get("priceRangeId");

  useEffect(() => {
    // createQueryString("itemsPerPage", "3");
    productService
      .getAllProducts({
        itemsPerPage: "3",
        pageNumber: "1",
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mx-5 mt-8 flex gap-20 lg:mx-12 lg:mt-12">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {products.length !== 0 ? (
        <div className="3xl:grid-cols-4 mx-auto grid w-full grid-cols-1 justify-center gap-8 xl:grid-cols-2 2xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="col-span-3 min-h-screen bg-white text-center text-xl font-semibold">
          Cargando productos...
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
