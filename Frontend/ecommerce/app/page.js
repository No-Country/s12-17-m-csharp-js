import Carousel from './components/Carrusel/Carousel';
import PopUp from './components/Popup/PopUp'

export default function Home() {
  let slides = [
    "/megasale1.png",
    "/megasale2.png",
    "/megasale3.png",
  ];

  let secondSlides= [
    "/specialoffer.png",
    "/specialoffer2.png",
    
  ];

  let thirdSlides= [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <div className="flex">
    {/* Primer carrusel */}
    <div className="w-[60%] h-96 mt-16 ml-10 ">
      <Carousel slides={slides} />
    </div>
  
    {/* Segundo carrusel dividido en dos */}
    <div className="w-[35%] mt-16 flex flex-col">
      <div className="h-[50%] ml-10 mr-10">
        <Carousel slides={secondSlides} />
      </div>
      <div className="h-[50%] ml-10 mt-4 mr-10">
        {/* Carrusel en la mitad inferior del segundo carrusel */}
        <Carousel slides={thirdSlides} />
      </div>
    </div>
  </div>
  )
}
