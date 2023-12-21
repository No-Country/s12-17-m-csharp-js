"use client";
import Pagination from "@/components/Pagination";
import { ProductCard, Sidebar } from "./Partials";
import { productService } from "@/services";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId") ?? "";
  const brandId = searchParams.get("brandId") ?? "";
  const productCondition = searchParams.get("productCondition") ?? "";
  const name = searchParams.get("name") ?? "";
  const pageNumber = searchParams.get("pageNumber") ?? "1";

  useEffect(() => {
    productService
      .getAllProducts({
        pageNumber,
        name,
        categoryId,
        brandId,
        productCondition,
      })
      .then(({ products, totalPages }) => {
        setProducts(products);
        setTotalPages(totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [brandId, categoryId, productCondition, name, pageNumber]);

  return (
    <div className="mx-5 mt-8 flex gap-20 lg:mx-12 lg:mt-12">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {isLoading ? (
        <div className="col-span-3 min-h-screen bg-white text-center text-xl font-medium">
          Cargando productos...
        </div>
      ) : products.length !== 0 ? (
        <div className="w-full">
          <div className="3xl:grid-cols-4 mx-auto grid w-full grid-cols-1 justify-center gap-8 xl:grid-cols-2 2xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12">
            <Pagination pageNumber={pageNumber} totalPages={totalPages} />
          </div>
        </div>
      ) : (
        <div className="col-span-3 min-h-screen bg-white text-center text-xl font-medium">
          No hay productos que coincidan con el criterio de busqueda
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
