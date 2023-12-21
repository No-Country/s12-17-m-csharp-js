import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div className="relative min-h-screen px-8">
      <div className="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-primary to-secondary">
        <Link
          href="/products/user-products"
          className="ml-8 mt-8 flex items-center gap-2 font-medium text-white"
        >
          <FaArrowLeftLong className="text-2xl" /> Volver
        </Link>
      </div>
      <div className="relative top-24 z-10 mx-auto mb-36 max-w-4xl rounded-md bg-white p-16 shadow-lg">
        {children}
      </div>
    </div>
  );
};
export default layout;
