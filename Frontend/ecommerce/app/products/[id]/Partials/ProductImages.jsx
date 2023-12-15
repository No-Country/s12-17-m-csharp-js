import Image from "next/image";

const ProductImages = ({ mainImage, additionalImages }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-12 w-96">
        {additionalImages.map((image, index) => (
          <Image key={index} src={image} alt={`product-image-${index}`} />
        ))}
      </div>
      <div className="w-[95rem]">
        <Image src={mainImage} alt="main-product-image" />
      </div>
    </>
  );
};

export default ProductImages;
