import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white-200 w-64 mr-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-16 mt-8">Filtrar</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categoría</h3>
          <select className="p-2 mb-2">
            <option value="">Todas</option>
            <option value="muebles">Muebles</option>
            <option value="celulares">Celulares</option>
            <option value="gaming">Gaming</option>
            {/* Agrega más opciones de categoría según necesites */}
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Condición</h3>
          <select className="p-2 mb-2">
            <option value="">Todas</option>
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Rango de precios</h3>
          <select className="p-2">
            <option value="">Todos</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            {/* Agrega más opciones de rango de precios según necesites */}
          </select>
        </div>
      </div>
    </div>
  );

};

export default Sidebar;