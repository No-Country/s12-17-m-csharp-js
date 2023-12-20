"use client";
import { useEffect, useState } from "react";
import { productService } from "@/services";
import { ProductCard, Sidebar } from "./Partials";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId") ?? "";
  const brandId = searchParams.get("brandId") ?? "";
  const productCondition = searchParams.get("priceRangeId") ?? "";

  useEffect(() => {
    productService
      .getAllProducts({
        categoryId,
        brandId,
        productCondition,
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [brandId, categoryId, productCondition]);

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
