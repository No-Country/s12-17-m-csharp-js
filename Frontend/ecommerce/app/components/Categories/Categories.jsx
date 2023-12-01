function Categories() {
  return (
    <ul className='grid md:grid-cols-3 gap-9 px-4 py-16'>
      <li className="h-96 relative flex items-center justify-center bg-[url('/assets/category.webp')] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-green-800 bg-cover bg-center rounded-2xl before:rounded-2xl">
        <span className='font-semibold text-3xl text-white uppercase z-10'>Hogar</span>
      </li>
      <li className="h-96 relative flex items-center justify-center bg-[url('/assets/category2.webp')] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-green-800 bg-cover bg-center rounded-2xl before:rounded-2xl">
        <span className='font-semibold text-3xl text-white uppercase z-10'>Gaming</span>
      </li>
      <li className="h-96 relative flex items-center justify-center bg-[url('/assets/category3.webp')] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-green-800 bg-cover bg-center rounded-2xl before:rounded-2xl">
        <span className='font-semibold text-3xl text-white uppercase z-10'>Moda</span>
      </li>
    </ul>
  )
}

export default Categories
