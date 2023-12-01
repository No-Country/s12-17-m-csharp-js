import CardCarousel from './components/Carrusel/Cardproduct'
import Carousel from './components/Carrusel/Carousel'
import Categories from './components/Categories/Categories'
import Promos from './components/Promos/Promos'

export default function Home() {
  let slides = ['/megasale1.png', '/megasale2.png', '/megasale3.png']

  let secondSlides = ['/specialoffer.png', '/specialoffer2.png']

  let thirdSlides = ['/Ellipse 146.png','/Ellipse 147.png','/carrefour.png','/wallmart.png','/icbfpng','/santander.png']
  const cardsData = [
    {
      id: 1,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 2',
    },

    {
      id: 3,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 3',
    },
    {
      id: 4,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 4',
    },

    {
      id: 5,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 5',
    },

    {
      id: 6,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 6',
    },
    
    // Agrega más datos para tarjetas adicionales aquí
    {
      id: 7,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 7',
    },
    {
      id: 8,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 8',
    },
    {
      id: 9,
      title: 'Lenovo IdeaPad Slim 3 8va Gen (14”, AMD)',
      image: '/lenovo.png',
      price: '$593.998',
      description: 'Description for Product 9',
    },
  ];
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
      <div className='mt-20 mr-40 ml-40'><CardCarousel cards={cardsData}/></div>
      <Categories />
      <Promos />
    </div>
  )
}
