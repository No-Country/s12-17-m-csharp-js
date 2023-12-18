import Image from "next/image";

const ProductImages = ({ mainImage, additionalImages }) => {
  return (
    <>
      <div className="flex w-96 flex-col items-center gap-12">
        {additionalImages.map((image, index) => (
          <div key={index} className="h-[8.9rem] w-full">
            <Image
              width="300"
              height="300"
              src={image}
              alt={`product-image-${index}`}
            />
          </div>
        ))}
      </div>
      <div className="h-[29.5rem] w-[115rem] overflow-hidden object-cover">
        <Image
          width="600"
          height="600"
          src={mainImage}
          alt="main-product-image"
        />
      </div>
    </>
  );
};

export default ProductImages;
