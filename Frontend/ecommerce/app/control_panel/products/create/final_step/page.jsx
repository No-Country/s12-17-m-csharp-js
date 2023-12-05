const FinalStepPage = () => {
    return (
        <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold mb-2">¡Haz completado tu publicación!</h1>
          <img src="/ok_icon.png" alt="Public" className="w-20 h-30" />
        </div>
        <div className="border-t border-gray-300 py-4">
          {/* Aquí va la sección del producto */}
          <div className="flex items-center">
            {/* Imagen del producto */}
            <img src="img/tables/category.webp" alt="Producto" className="w-24 h-24 rounded-lg mr-4" />
            {/* Detalles del producto */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-2">Mesa de comedor industrial</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-60">Ir a la publicación</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default FinalStepPage;