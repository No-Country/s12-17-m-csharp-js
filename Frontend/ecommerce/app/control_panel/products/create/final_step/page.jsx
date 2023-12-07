import Link from "next/link";

const FinalStepPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold mb-2">
          ¡Haz completado tu publicación!
        </h1>
        <img src="/ok_icon.png" alt="Public" className="w-20 h-30" />
      </div>
      <div className="border-t border-gray-300 py-4">
        {/* Aquí va la sección del producto */}
        <div className="flex items-center">
          {/* Imagen del producto */}
          <img
            src="/assets/category.webp"
            alt="Producto"
            className="w-24 h-24 rounded-lg mr-4"
          />
          {/* Detalles del producto */}
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">
              Mesa de comedor industrial
            </h2>
            <Link
              href="/products/1"
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-60"
            >
              Ir a la publicación
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalStepPage;
