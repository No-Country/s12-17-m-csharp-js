"use client";
import { TypeAnimation } from "react-type-animation";

const Layout = ({ children }) => {
  return (
    <div className="flex h-full">
      {/* Columna del logo */}
      <div className="w-1/2 border-r-4 border-black bg-gradient-to-br from-primary to-secondary px-28 text-black">
        <h1 className="mt-12 text-5xl font-semibold uppercase">surshop</h1>
        <p className="flex min-h-[calc(100vh-250px)] items-center text-6xl font-semibold uppercase italic leading-tight">
          <TypeAnimation
            sequence={["Tu tienda en línea a un solo click", 2000]}
            repeat={Infinity}
          />
        </p>
      </div>

      {/* Columna del formulario */}
      <div className="flex min-h-[calc(100vh-64px)] w-1/2 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
export default Layout;
