import StarRating from "@/components/StarRating";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, handleCartChange, isInCart }) => {
  return (
    <div className="mx-auto flex w-full rounded-xl border border-slate-200 shadow-sm shadow-slate-300 transition-shadow hover:shadow-xl lg:flex-col">
      <Link href={"/products/" + product.id}>
        <Image
          className="mx-auto h-[250px] w-[250px] object-cover p-4 md:h-[330px] md:w-[330px] lg:p-8"
          width={330}
          height={330}
          src={product.images[0]}
          alt={product.name}
          priority={true}
        />
      </Link>
      <hr className="hidden w-full bg-slate-200 lg:block" />
      <div className="w-[300px] space-y-4 p-6 lg:w-auto">
        <span className="flex flex-col gap-4">
          <Link href={"/products/" + product.id}>
            <h2 className="line-clamp-1 text-xl font-semibold capitalize text-blue-800 transition-colors hover:text-blue-950 lg:text-lg">
              {product.name} {isInCart ? "🛒" : "false"}
            </h2>
          </Link>
          <div className="flex flex-col-reverse justify-between gap-2 lg:flex-row">
            <span className="flex items-center space-x-3">
              <StarRating rating={3} />
              <span className="text-slate-400 text-opacity-90">(121)</span>
            </span>
            <p className="animate-pulse font-medium">
              $
              {parseFloat(product.price)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
          </div>
        </span>

        <div className="flex flex-col justify-between gap-3 text-base font-medium lg:flex-row lg:text-sm">
          <button className="w-full rounded-3xl bg-info/90 py-2 text-white transition-all hover:scale-105 hover:bg-info focus:outline-none">
            Comprar
          </button>
          <button
            onClick={() => handleCartChange(product)}
            className={`w-full whitespace-nowrap rounded-3xl border border-slate-200 bg-white py-2 text-black transition-all hover:scale-105 hover:border-slate-300 hover:bg-slate-50 focus:outline-none 
            ${isInCart ? "bg-red-500 text-white" : ""}`}
          >
            {isInCart ? "Quitar del carrito" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
