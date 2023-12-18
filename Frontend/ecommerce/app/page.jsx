import CardCarousel from "@/components/Carrusel/Cardproduct";
import Carousel from "@/components/Carrusel/Carousel";
import CombinedCarousel from "@/components/Carrusel/Carousel_section1";
import Categories from "@/components/Categories/Categories";
import Promos from "@/components/Promos/Promos";
import {
  SLIDES,
  SECOND_SLIDES,
  THIRD_SLIDES,
  CARDS_DATA,
} from "@/constants/homeData";

export default function Home() {
  return (
    <>
      <div className="mx-24 mt-24 flex justify-center gap-6">
        {/* Primer carrusel */}
        <div className="w-1/2">
          <Carousel slides={SLIDES} />
        </div>
        {/* Segundo carrusel dividido en dos */}
        <div className="flex w-[35%] flex-col justify-between">
          <Carousel slides={SECOND_SLIDES} />
          <div className="h-[50%] bg-red-500">
            {/* Carrusel en la mitad inferior del segundo carrusel */}
            <CombinedCarousel slides={THIRD_SLIDES} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1200px]">
        <CardCarousel cards={CARDS_DATA} />
        <Categories />
        <Promos />
      </div>
    </>
  );
}
