"use client";
import Breadcrumb from "@/components/Breadcrum";
import { useRouter } from "next/navigation";
import { ProductInfo, ProductImages } from "./Partials";
import {
  PRODUCT_BREADCRUM_ITEMS,
  PRODUCT_INFORMATION,
  PRODUCT_TABS,
  PRODUCT_CARDS,
} from "@/constants/product";

import Tabs from "@/components/Tabs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import CardCarousel from "@/components/Carrusel/Cardproduct";
import { productService } from "@/services";
import { useEffect, useState } from "react";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    productService
      .getProductById(params.id)
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          console.log("Product not found");
          router.push("/404");
        }
      });
  }, [params.id, router]);

  if (!product) {
    return (
      <div className="mx-auto mt-10 min-h-screen w-full max-w-5xl">
        Cargando producto...
      </div>
    );
  }

  return (
    <div className="mx-auto mb-10 max-w-5xl bg-white">
      <div className="flex min-h-[calc(100vh-80px)] flex-col justify-center">
        <Breadcrumb items={PRODUCT_BREADCRUM_ITEMS} />
        <div className="mt-6 flex w-full gap-16">
          <ProductImages
            // mainImage={PRODUCT_IMAGES.mainImage}
            mainImage={product.images[0]}
            // additionalImages={PRODUCT_IMAGES.additionalImages}
            additionalImages={[
              product.images[1],
              product.images[2],
              product.images[3],
            ]}
          />
          <ProductInfo
            category={product.category}
            name={product.name}
            rating={PRODUCT_INFORMATION.rating}
            numReviews={PRODUCT_INFORMATION.numReviews}
            price={product.price}
            productCondition={product.productCondition}
            currentStock={product.currentStock}
          />
        </div>
        <HiOutlineChevronDoubleDown className="mx-auto h-6 w-6 animate-bounce text-gray-500" />
      </div>

      <Tabs>
        <Tabs.Content title="Descripción">{product.description}</Tabs.Content>
        <Tabs.Content title="Calificaciones">
          {PRODUCT_TABS.reviews}
        </Tabs.Content>
        <Tabs.Content title="Preguntas y Respuestas">
          {PRODUCT_TABS.questions}
        </Tabs.Content>
      </Tabs>

      <hr className="mt-24 border-gray-200" />
      <div className="-mx-4">
        <CardCarousel cards={PRODUCT_CARDS} />
      </div>
    </div>
  );
};

export default ProductDetail;
