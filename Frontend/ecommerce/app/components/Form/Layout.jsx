const Layout = ({ children }) => {
  return (
    <div className="flex h-full">
      {/* Columna del logo */}
      <div className="flex items-center justify-center w-1/2 bg-primary">
        <div className="flex items-center justify-center h-full ">
          <h1>Logo</h1>
        </div>
      </div>

      {/* Columna del formulario */}
      <div className="w-1/2 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        {children}
      </div>
    </div>
  );
};
export default Layout;
