import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div className="relative min-h-screen px-8">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary to-secondary">
        <Link
          href="/control_panel"
          className="flex items-center text-white font-medium gap-2 mt-8 ml-8"
        >
          <FaArrowLeftLong className="text-2xl" /> Volver
        </Link>
      </div>
      <div className="relative z-10 max-w-4xl p-16 mx-auto bg-white rounded-md shadow-lg top-24 mb-36">
        {children}
      </div>
    </div>
  );
};
export default layout;
