import Image from "next/image";
import Link from "next/link";
import cartStore from "@/store/cartStore";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = cartStore((state) => state);
  const isProductInCart = isInCart(product.id);

  const handleCartChange = (product) => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="grid h-fit w-full grid-cols-1 gap-x-4 rounded-xl border border-slate-200 shadow-sm shadow-slate-300 transition-shadow hover:shadow-xl sm:grid-cols-2 xl:grid-cols-1">
      <div className="min-w-full">
        <Link href={"/products/" + product.id}>
          <Image
            className="mx-auto max-h-[260px] min-h-[260px] min-w-[260px] max-w-[260px] rounded-t-xl
             object-cover p-4 lg:px-0 lg:py-5"
            width={260}
            height={260}
            src={product.images[0].url}
            alt={product.name}
            priority={true}
          />
        </Link>
        <hr className="block w-full bg-slate-200 sm:hidden lg:block" />
      </div>
      <div className="grid w-full p-4 lg:w-auto">
        <Link href={"/products/" + product.id}>
          <h2 className="line-clamp-1 text-xl font-semibold capitalize text-blue-800 transition-colors hover:text-blue-950 lg:text-lg">
            {product.name}
          </h2>
        </Link>
        <p className="animate-pulse font-medium">
          $
          {parseFloat(product.price)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </p>
        <div className="mt-3 flex flex-col items-center gap-3 text-sm font-medium lg:text-base xl:flex-row">
          <button className="w-full rounded-3xl bg-info/90 py-2 text-white transition-all hover:scale-105 hover:bg-info">
            Comprar
          </button>
          <button
            onClick={() => handleCartChange(product)}
            className="w-full whitespace-nowrap rounded-3xl border border-slate-200 bg-white py-2 text-black transition-all hover:scale-105 hover:border-slate-300 hover:bg-slate-50 xl:px-6"
          >
            {isProductInCart ? "Quitar del carrito" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
