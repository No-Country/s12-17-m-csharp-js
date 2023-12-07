import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
const ChooseSpecificCategoryStepPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">
        Clasifícalo con una categoría
      </h1>
      <div className="font-semibold mt-8 mb-2">Categorías</div>
      <ul className="flex flex-col border-b border-gray-200 mb-4">
        <Link href="/control_panel/products/create/detail_product_step">
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2 flex items-center justify-between">
            Gaming <IoIosArrowForward />
          </li>
        </Link>
        <Link href="/control_panel/products/create/detail_product_step">
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2 flex items-center justify-between">
            Hogar <IoIosArrowForward />
          </li>
        </Link>
        <Link href="/control_panel/products/create/detail_product_step">
          <li className="mb-4 cursor-pointer bg-pink-200 rounded-lg p-2 flex items-center justify-between">
            Celulares <IoIosArrowForward />
          </li>
        </Link>
        {/* Puedes añadir más pestañas aquí */}
      </ul>
      {/* Agrega más contenido para otras pestañas si es necesario */}
    </div>
  );
};
export default ChooseSpecificCategoryStepPage;
