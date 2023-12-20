import { getToken } from "@/services/apiClient";
import { cartStore } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ProductInfo = ({
  category,
  name,
  price,
  productCondition,
  currentStock,
  product,
}) => {
  const { addToCart, removeFromCart, isInCart } = cartStore((state) => state);
  const isProductInCart = isInCart(product.id);
  const [token, setToken] = useState(null);
  const router = useRouter();
  getToken().then((tok) => {
    if (tok) setToken(tok);
  });

  const handleCartChange = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const handleBuy = () => {
    if (token) {
      !isProductInCart && addToCart(product);
      router.push("/cart/pay");
    } else router.push("/login");
  };

  return (
    <div className="w-full">
      <h1 className="text-sm font-semibold hover:text-blue-800">
        <a href="#">{category}</a>
      </h1>
      <h2 className="mt-6 text-3xl font-medium">{name}</h2>

      <div className="mt-8 space-y-3 text-sm">
        <p className="text-4xl font-medium">${price.toFixed(2)}</p>
        <p className="pt-3">
          Estado: <span className="font-semibold">{productCondition}</span>
        </p>
        <p>{currentStock > 0 ? "Stock disponible" : "Sin stock"}</p>
        <p>Cantidad 1, más de {currentStock} disponibles</p>
      </div>
      <button
        onClick={handleBuy}
        className="mt-8 w-full rounded-xl bg-secondary/90 py-3 transition-transform hover:scale-105 hover:font-medium"
      >
        {token !== null ? "Comprar ahora" : "Iniciar sesión"}
      </button>
      <button
        onClick={handleCartChange}
        className="mt-4 w-full rounded-xl bg-primary/70 py-3 transition-transform hover:scale-105 hover:font-medium"
      >
        {isProductInCart ? "Quitar del carrito" : "Agregar al carrito"}
      </button>
    </div>
  );
};
export default ProductInfo;
