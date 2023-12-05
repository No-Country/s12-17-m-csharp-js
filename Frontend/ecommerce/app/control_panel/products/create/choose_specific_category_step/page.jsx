const ChooseSpecificCategoryStepPage = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold mb-2">Clasifícalo con una categoría</h1>
        <div className="font-semibold mt-8 mb-2">Categorías</div>
        <ul className="flex flex-col border-b border-gray-200 mb-4">
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2">Gaming</li>
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2">Hogar</li>
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2">Celulares</li>
          {/* Puedes añadir más pestañas aquí */}
        </ul>
        {/* Agrega más contenido para otras pestañas si es necesario */}
      </div>
    );
  };
  export default ChooseSpecificCategoryStepPage;
