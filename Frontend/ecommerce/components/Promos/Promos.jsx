function Promos() {
  return (
    <ul className="grid gap-9 px-4 py-16 sm:grid-cols-2">
      <li className="grid gap-y-3">
        <div className="relative h-60 rounded-2xl bg-[url('/assets/promo.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-yellow-500"></div>
        <span className="z-10 text-center text-3xl font-semibold uppercase">
          Novedades
        </span>
      </li>
      <li className="grid gap-y-3">
        <div className="relative h-60 rounded-2xl bg-[url('/assets/promo2.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-yellow-500"></div>
        <span className="z-10 text-center text-3xl font-semibold uppercase">
          Descuentos
        </span>
      </li>
    </ul>
  );
}

export default Promos;
