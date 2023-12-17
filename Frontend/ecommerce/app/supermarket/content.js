"use client";
import React, { useState, useEffect, useMemo } from "react";
import useStore from "../store/useStore";
import Image from "next/image";
import ecommerceService from '../../services/ecommerce-service'
import { useSession } from "next-auth/react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // const { data } = useSession();
  // console.log(data.user.token);
  useEffect(() => {
    // Lógica para obtener datos de la base de datos
    // fetch("https://fakestoreapi.com/products")
     fetch("https://www.ecommerceback.somee.com/api/Producto/Busqueda")
       .then((response) => {
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         return response.json();
       })
       .then((data) => {
         setProducts(data);
       })
       .catch((error) => {
         console.error("Error fetching products:", error);
       });
  
  // ecommerceService.getProducts()
  // .then((data) => {
  //   setProducts(data.data);
  // })
}, []);

  const filteredProducts = useMemo(() => {
    const filterByPrice = (product) => {
      const [minPrice, maxPrice] = priceRange.split("-").map(parseFloat);
      const productPrice = parseFloat(product.precio);
      return productPrice >= minPrice && productPrice <= maxPrice;
    };

    return products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!condition || p.condition === condition) &&
        (!priceRange || filterByPrice(p))
    );
  }, [products, category, condition, priceRange]);

  return (
    <div className="container py-8 mx-auto">
      <div className="flex">
        <Sidebar
          setCategory={setCategory}
          setCondition={setCondition}
          setPriceRange={setPriceRange}
        />
        <div className="grid w-full grid-cols-3 gap-4">
          {products.length === 0 && (
            <div className="col-span-3 text-xl font-semibold text-center">
              Cargando...
            </div>
          )}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ setCategory, setCondition, setPriceRange }) => {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="mr-4 w-80 bg-white-200">
      <div className="p-4">
        <h2 className="mt-8 mb-16 text-xl font-semibold">Filtrar</h2>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Categoría</h3>
          <select className="w-full p-2 mb-2" onChange={handleCategoryChange}>
            <option value="">Todos</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Condición</h3>
          <select className="w-full p-2 mb-2" onChange={handleConditionChange}>
            {/* Opciones de condición */}
          </select>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Rango de precios</h3>
          <select className="w-full p-2" onChange={handlePriceRangeChange}>
            <option value="">Todos</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            {/* Opciones de rango de precios */}
          </select>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const isInCart = useStore((state) => state.isInCart(product.id));
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleCartChange = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="border border-white p-4 h-[300px] relative overflow-hidden group transition">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-center mb-4">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              width={200}
              height={200}
              src={product.imagenes[0].url}
              alt={product.nombre}
              className="max-h-[160px] group-hover:scale-110 transition duration-300 w-auto h-auto"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="mb-2 font-semibold text-md">{product.nombre}</h2>
          <p className="mt-2 text-blue-500">${product.precio}</p>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">
            Comprar
          </button>
          <button
            onClick={handleCartChange}
            className={`px-4 py-2 ml-4 text-black border border-gray-300 rounded-md focus:outline-none ${
              isInCart ? "bg-red-500 text-white" : ""
            }`}
          >
            {isInCart ? "Quitar del carrito" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductsPage, Sidebar, ProductCard };
