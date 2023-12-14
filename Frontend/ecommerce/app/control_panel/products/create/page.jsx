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
import ImageUploader from "@/app/components/Form/ImageUploader";

const CreateProduct = () => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    brandService.getAllBrands().then((brands) => {
      setBrandOptions(
        brands.map((brand) => ({
          value: brand.id,
          label: brand.name,
        }))
      );
    });

    categoryService.getAllCategories().then((categories) => {
      setCategoryOptions(
        categories.map((category) => ({
          value: category.id,
          label: category.name,
        }))
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
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <FormProvider {...methods}>
      <form id="productForm" onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-bold">Composición del producto</h1>
        <div className="grid grid-cols-1 gap-6 mt-10">
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
        <div className="flex justify-end w-full mt-8">
          <button
            type="submit"
            className="flex items-center justify-center p-4 mb-2 font-semibold transition-transform rounded-lg bg-secondary text-primary hover:scale-105"
          >
            Añadir producto
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
export default CreateProduct;
