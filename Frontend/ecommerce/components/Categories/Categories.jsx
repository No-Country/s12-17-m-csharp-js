function Categories() {
  return (
    <ul className="grid gap-9 px-4 py-16 md:grid-cols-3">
      <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
        <span className="z-10 text-3xl font-semibold uppercase text-white">
          Hogar
        </span>
      </li>
      <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category2.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
        <span className="z-10 text-3xl font-semibold uppercase text-white">
          Gaming
        </span>
      </li>
      <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category3.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
        <span className="z-10 text-3xl font-semibold uppercase text-white">
          Moda
        </span>
      </li>
    </ul>
  );
}

export default Categories;
