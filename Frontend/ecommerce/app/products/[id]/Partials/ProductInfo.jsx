import StarRating from "@/components/StarRating";

const ProductInfo = ({
  category,
  name,
  rating,
  numReviews,
  price,
  productCondition,
  currentStock,
}) => {
  return (
    <div className="w-full">
      <h1 className="text-sm font-semibold hover:text-blue-800">
        <a href="#">{category}</a>
      </h1>
      <h2 className="mt-6 text-3xl font-medium">{name}</h2>
      <div className="mt-3 flex items-center gap-2">
        <StarRating rating={rating} />
        <span className="text-xs font-medium">{numReviews} calificaciones</span>
      </div>

      <div className="mt-8 space-y-3 text-sm">
        <p className="text-4xl font-medium">${price.toFixed(3)}</p>
        <p className="pt-3">
          Estado: <span className="font-semibold">{productCondition}</span>
        </p>
        <p>{currentStock > 0 ? "Stock disponible" : "Sin stock"}</p>
        <p>Cantidad 1, más de {currentStock} disponibles</p>
      </div>
      <button className="mt-8 w-full rounded-xl bg-secondary/90 py-3 transition-transform hover:scale-105 hover:font-medium">
        Comprar ahora
      </button>
      <button className="mt-4 w-full rounded-xl bg-primary/70 py-3 transition-transform hover:scale-105 hover:font-medium">
        Agregar al carrito
      </button>
    </div>
  );
};
export default ProductInfo;
