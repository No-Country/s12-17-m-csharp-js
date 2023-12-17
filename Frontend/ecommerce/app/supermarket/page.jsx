"use client";
import useStore from "@/store/useStore";
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

  // const isInCart = useStore((state) => state.isInCart);
  // const addToCart = useStore((state) => state.addToCart);
  // const removeFromCart = useStore((state) => state.removeFromCart);
  const { cart, addToCart, removeFromCart } = useStore((state) => state);

  const isInCart = (id) => cart.some((product) => product.id === id);

  const onCartChange = (product) => {
    console.log(product);
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="mx-12 mt-12 flex gap-10">
      <div className="hidden md:block">
        <Sidebar
          setCategory={setCategory}
          setCondition={setCondition}
          setPriceRange={setPriceRange}
        />
      </div>
      <div className="grid w-full grid-cols-1 justify-center gap-8 lg:grid-cols-2 2xl:grid-cols-3">
        {products.length === 0 && (
          <div className="col-span-3 text-center text-xl font-semibold">
            Cargando...
          </div>
        )}
        {filteredProducts.map((product) => (
          <ProductCard
            handleCartChange={onCartChange}
            isInCart={isInCart(product.id)}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
