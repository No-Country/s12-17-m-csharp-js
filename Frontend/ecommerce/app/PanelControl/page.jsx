import React from 'react'
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BiPurchaseTag } from "react-icons/bi";
import { BsBagDash } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

function page() {
    return (
        
        <div className="flex h-screen">
          {/* Sección de cabecera */}
          <div className="bg-gray-800 text-white py-4 px-4 w-1/5">
            <div className="flex felx-col items-center">
              <h2 className="font-bold mb-10">Perfil</h2> 
            </div>
            <div className='flex items-center justify-center mt-8'>
            <img src="avatar.png" alt="Avatar" className="w-12 h-12 rounded-full mr-2" />
            <span>Nombre</span>
            </div>
            
            <nav className=" flex items-center justify-center mt-16">
              <ul>
                
                <li className='flex items-center text-gray-300 hover:text-white py-1 mb-5'> <BsBagDash  className='mr-2'/>Ventas</li>
                <li className='flex items-center text-gray-300 hover:text-white py-1 mb-5'><BiPurchaseTag className='mr-2'/>Compras</li>
                <li className='flex items-center text-gray-300 hover:text-white py-1 mb-5'>Subscripciones</li>
                <li className='flex items-center text-gray-300 hover:text-white py-1 mb-5'><CgProfile className='mr-2' />Mi perfil</li>
                <li className='flex items-center text-gray-300 hover:text-white py-1 mb-5'> <CiSettings className='mr-2'/> Configuración</li>
                {/* Otros enlaces */}
              </ul>
            </nav>
            <div className='flex items-center justify-center mt-28'> salir <FaSignOutAlt className='ml-24'/> </div>
          </div>
    
          {/* Barra de navegación y sección de administrar elementos */}
          <main className="bg-white-200 w-full p-8">
            <header className="py-4 px-4 mb-8 flex items-center justify-between border-b border-gray-300">
              <h2 className="text-xl font-bold">Lista de productos vendiendo</h2>
              <button className='bg-primary text-center text-white rounded-full px-4 py-2'>crear un anuncio nuevo</button>
            </header>
            {/* Contenido de elementos CRUD */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Precio</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Número de Serie</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Fecha de Publicación</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <img src="ruta-a-la-imagen.jpg" alt="Producto" className="w-8 h-8 rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">Nombre del producto</td>
                    <td className="px-6 py-4 whitespace-nowrap">$100</td>
                    <td className="px-6 py-4 whitespace-nowrap">50</td>
                    <td className="px-6 py-4 whitespace-nowrap">AB123456</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-11-27</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="mr-2 text-blue-600 hover:text-blue-900 cursor-pointer">Ver</span>
                        <span className="mr-2 text-green-600 hover:text-green-900 cursor-pointer">Editar</span>
                        <span className="text-red-600 hover:text-red-900 cursor-pointer">Eliminar</span>
                    </td>
                    </tr>

                    {/* Aquí puedes agregar más filas con datos ficticios */}
                </tbody>
                </table>
            </div>
          </main>
        </div>
      );
}

export default page