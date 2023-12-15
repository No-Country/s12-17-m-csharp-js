"use client";
import Breadcrumb from "@/app/components/Breadcrum";
import { ProductInfo, ProductImages } from "./Partials";
import {
  PRODUCT_BREADCRUM_ITEMS,
  PRODUCT_IMAGES,
  PRODUCT_INFORMATION,
  PRODUCT_TABS,
  PRODUCT_CARDS,
} from "@/app/constants/product";

import Tabs from "@/app/components/Tabs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import CardCarousel from "@/app/components/Carrusel/Cardproduct";

const ProductDetailPage = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto mb-10">
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <Breadcrumb items={PRODUCT_BREADCRUM_ITEMS} />
        <div className="flex w-full gap-20 mt-6">
          <ProductImages
            mainImage={PRODUCT_IMAGES.mainImage}
            additionalImages={PRODUCT_IMAGES.additionalImages}
          />
          <ProductInfo
            category={PRODUCT_INFORMATION.category}
            name={PRODUCT_INFORMATION.name}
            rating={PRODUCT_INFORMATION.rating}
            numReviews={PRODUCT_INFORMATION.numReviews}
            price={PRODUCT_INFORMATION.price}
            productCondition={PRODUCT_INFORMATION.productCondition}
            stock={PRODUCT_INFORMATION.stock}
          />
        </div>
        <HiOutlineChevronDoubleDown className="w-6 h-6 mx-auto text-gray-500 animate-bounce" />
      </div>

      <Tabs>
        <Tabs.Content title="Descripción">
          {PRODUCT_TABS.description}
        </Tabs.Content>
        <Tabs.Content title="Calificaciones">
          {PRODUCT_TABS.reviews}
        </Tabs.Content>
        <Tabs.Content title="Preguntas y Respuestas">
          {PRODUCT_TABS.questions}
        </Tabs.Content>
      </Tabs>

      <hr className="border-gray-200 mt-24" />
      <div className="-mx-4">
        <CardCarousel cards={PRODUCT_CARDS} />
      </div>
    </div>
  );
};
export default ProductDetailPage;
