"use client";
import Breadcrumb from "@/components/Breadcrum";
import { useRouter } from "next/navigation";
import { ProductInfo, ProductImages } from "./Partials";
import { PRODUCT_CARDS, PRODUCT_IMAGES } from "@/constants/product";

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
        <Breadcrumb
          items={[
            {
              path: "/",
              label: "Inicio",
            },
            {
              path: "/products",
              label: "Productos",
            },
            {
              label: `${product.category.name}`,
              path: `/products?categoryId=${product.category.id}`,
            },
          ]}
        />
        <div className="mt-6 flex w-full gap-16">
          <ProductImages
            mainImage={product.images[0]?.url ?? PRODUCT_IMAGES.mainImage}
            additionalImages={[
              product.images[1]?.url ?? PRODUCT_IMAGES.additionalImages[0],
              product.images[2]?.url ?? PRODUCT_IMAGES.additionalImages[1],
              product.images[3]?.url ?? PRODUCT_IMAGES.additionalImages[2],
            ]}
          />
          <ProductInfo
            category={product.category.name}
            name={product.name}
            price={product.price}
            productCondition={product.productCondition}
            currentStock={product.currentStock}
            product={product}
          />
        </div>
        <HiOutlineChevronDoubleDown className="mx-auto h-6 w-6 animate-bounce text-gray-500" />
      </div>

      <hr className="mt-24 border-gray-200" />
      <div className="-mx-4">
        <CardCarousel cards={PRODUCT_CARDS} />
      </div>
    </div>
  );
};

export default ProductDetail;
