import Carousel from './components/Carrusel/Carousel'
import Categories from './components/Categories/Categories'
import Promos from './components/Promos/Promos'

export default function Home() {
  let slides = ['/megasale1.png', '/megasale2.png', '/megasale3.png']

  let secondSlides = ['/specialoffer.png', '/specialoffer2.png']

  let thirdSlides = ['/Ellipse 146.png',
  '/Ellipse 147.png',
  '/carrefour.png',
  '/wallmart.png','/icbfpng','/santander.png']
  return (
    <div>
      <div className='flex'>
        {/* Primer carrusel */}
        <div className='w-[50%] h-70  ml-10 '>
          <Carousel slides={slides} />
        </div>
        {/* Segundo carrusel dividido en dos */}
        <div className='w-[35%]  flex flex-col'>
          <div className='h-[96%] ml-10 mr-10'>
            <Carousel slides={secondSlides} />
          </div>
          <div className='h-[50%] ml-10 mt-4 mr-10'>
            {/* Carrusel en la mitad inferior del segundo carrusel */}
            <Carousel slides={thirdSlides} />
          </div>
        </div>
      </div>
      <Categories />
      <Promos />
    </div>
  )
}
