"use client";
import { useState, useEffect, useMemo } from "react";
import { productService } from "@/services";
import { ProductCard, Sidebar } from "./Partials";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    productService
      .getAllProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    const filterByPrice = (product) => {
      const [minPrice, maxPrice] = priceRange.split("-").map(parseFloat);
      const productPrice = parseFloat(product.price);
      return productPrice >= minPrice && productPrice <= maxPrice;
    };

    return products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!condition || p.condition === condition) &&
        (!priceRange || filterByPrice(p)),
    );
  }, [products, category, condition, priceRange]);

  return (
    <div className="mx-5 mt-5 flex gap-20 lg:mx-12 lg:mt-12">
      <div className="hidden md:block">
        <Sidebar
          setCategory={setCategory}
          setCondition={setCondition}
          setPriceRange={setPriceRange}
        />
      </div>
      {products.length !== 0 ? (
        <div className="3xl:grid-cols-4 mx-auto grid w-full grid-cols-1 justify-center gap-8 xl:grid-cols-2 2xl:grid-cols-3">
          {filteredProducts.map((product) => (
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
