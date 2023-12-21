import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";

const ProductsTable = ({ products, onDelete }) => {
  return (
    <table className="w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Nombre
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Categoría
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Precio
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Stock
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 bg-white">
        {" "}
        {products.map((product) => (
          <tr key={product.id}>
            <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
            <td className="whitespace-nowrap px-6 py-4">
              {product.category.name}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              $ {parseFloat(product.price).toFixed(2)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {product.currentStock}
            </td>
            <td className="flex items-center space-x-4 whitespace-nowrap px-6 py-4">
              <span className="cursor-pointer text-blue-600 hover:text-blue-900">
                <Link href={"/products/" + product.id}>
                  <IoEyeOutline />
                </Link>
              </span>
              <Link
                href={"/products/edit/" + product.id}
                className="cursor-pointer text-green-600 hover:text-green-900"
              >
                <CiEdit />
              </Link>
              <button
                onClick={() => onDelete(product.id)}
                className="cursor-pointer text-red-600 hover:text-red-900"
              >
                <AiTwotoneDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductsTable;
