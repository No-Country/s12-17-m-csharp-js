import StarRating from "@/app/components/StarRating";

const ProductInfo = ({
  category,
  name,
  rating,
  numReviews,
  price,
  productCondition,
  stock,
}) => {
  return (
    <div className="w-full">
      <h1 className="text-sm font-semibold hover:text-blue-800">
        <a href="#">{category}</a>
      </h1>
      <h2 className="mt-8 text-3xl font-medium">{name}</h2>
      <div className="flex items-center gap-2 mt-3">
        <StarRating rating={rating} />
        <span className="text-xs font-medium">{numReviews} calificaciones</span>
      </div>

      <div className="mt-8 space-y-4 text-sm">
        <p className="text-4xl font-medium">${price.toFixed(3)}</p>
        <p className="pt-4">
          Estado: <span className="font-semibold">{productCondition}</span>
        </p>
        <p>{stock > 0 ? "Stock disponible" : "Sin stock"}</p>
        <p>
          Cantidad <span className="font-semibold">1</span> más de {stock}{" "}
          disponibles
        </p>
      </div>
      <button className="w-full py-4 mt-8 transition-transform bg-secondary rounded-xl hover:scale-105 hover:font-medium bg-opacity-90">
        Comprar ahora
      </button>
      <button className="w-full py-4 mt-4 transition-transform bg-primary rounded-xl hover:scale-105 hover:font-medium bg-opacity-70">
        Agregar al carrito
      </button>
    </div>
  );
};
export default ProductInfo;
