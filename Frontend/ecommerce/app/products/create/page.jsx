"use client";
import { brandService, categoryService, productService } from "@/services";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  TextAreaInput,
  TextInput,
  SelectInput,
  RadioInputGroup,
} from "./Partials";
import ImageUploader from "@/app/(auth)/Partials/ImageUploader";
import PopUp from "@/components/PopUp";

const CreateProduct = () => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    brandService.getAllBrands().then((brands) => {
      setBrandOptions(
        brands.map((brand) => ({
          value: brand.id,
          label: brand.name,
        })),
      );
    });

    categoryService.getAllCategories().then((categories) => {
      setCategoryOptions(
        categories.map((category) => ({
          value: category.id,
          label: category.name,
        })),
      );
    });
  }, []);

  const { ...methods } = useForm();

  const onSubmit = (data) => {
    productService
      .addProduct({
        name: data.name,
        description: data.description,
        categoryId: data.category,
        brandId: data.brand,
        model: data.model,
        unit: "Unidad",
        currentStock: data.stock,
        productCondition: data.productCondition,
        price: data.price,
        images,
      })
      .then(() => {
        setShowPopUp(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <FormProvider {...methods}>
      {showPopUp && (
        <PopUp
          redirectTo="/products/user-products"
          title="¡Producto creado!"
          description="!El producto se ha creado con éxito!"
          onClose={() => setShowPopUp(false)}
        />
      )}
      <form id="productForm" onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-bold">Composición del producto</h1>
        <div className="mt-10 grid grid-cols-1 gap-6">
          <TextInput
            label="Nombre"
            name="name"
            placeholder="Titulo del producto a vender"
          />
          <TextAreaInput
            label="Descripción"
            name="description"
            placeholder="Breve descripción del producto a vender..."
          />
          <div className="grid grid-cols-2 gap-12">
            <SelectInput
              label="Categoría"
              name="category"
              options={categoryOptions}
            />
            <SelectInput label="Marca" name="brand" options={brandOptions} />
            <TextInput label="Modelo" name={"model"} isRequired={false} />
            <TextInput
              label="Precio"
              name="price"
              type="number"
              placeholder="$"
            />
            <TextInput
              label="Stock"
              name={"stock"}
              type="number"
              placeholder="1"
            />
            <TextInput label="Unidad" placeholder={"unidad"} name={"unit"} />
            <RadioInputGroup
              label="Estado del producto:"
              name="productCondition"
              options={["Nuevo", "Usado"]}
            />
          </div>
        </div>
        <div className="mt-8">
          <ImageUploader
            name="images"
            control={methods.control}
            images={images}
            setImages={setImages}
          />
        </div>
        <div className="mt-8 flex w-full justify-end">
          <button
            type="submit"
            className="mb-2 flex items-center justify-center rounded-lg bg-secondary p-4 font-semibold text-primary transition-transform hover:scale-105"
          >
            Añadir producto
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
export default CreateProduct;
