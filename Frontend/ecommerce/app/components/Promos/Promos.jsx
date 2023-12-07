function Promos() {
  return (
    <ul className='grid sm:grid-cols-2 gap-9 px-4 py-16'>
      <li className='grid gap-y-3'>
        <div className="h-60 relative bg-[url('/assets/promo.webp')] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-yellow-500 bg-cover bg-center rounded-2xl before:rounded-2xl"></div>
        <span className='font-semibold text-center text-3xl uppercase z-10'>Novedades</span>
      </li>
      <li className='grid gap-y-3'>
        <div className="h-60 relative bg-[url('/assets/promo2.webp')] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-yellow-500 bg-cover bg-center rounded-2xl before:rounded-2xl"></div>
        <span className='font-semibold text-center text-3xl uppercase z-10'>Descuentos</span>
      </li>
    </ul>
  )
}

export default Promos
