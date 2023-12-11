import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-64">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Categorías</h2>
        <ul>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Electrónicos</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Ropa</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Hogar y Jardín</a></li>
          {/* Agrega más elementos de la barra lateral según necesites */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;