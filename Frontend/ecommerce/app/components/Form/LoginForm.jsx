const LoginForm = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8">
      {/* Columna del logo */}
      <div className="flex items-center justify-center">
        <div className="bg-blue-500 h-32 w-32 rounded-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Logo</h1>
        </div>
      </div>

      {/* Columna del formulario */}
      <div className="flex items-center">
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;