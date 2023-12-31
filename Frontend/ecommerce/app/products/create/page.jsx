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
  const [isCreating, setIsCreating] = useState(false);
  const [showError, setShowError] = useState(false);

  // Load brands and categories options
  useEffect(() => {
    brandService
      .getAllBrands()
      .then((brands) => {
        setBrandOptions(
          brands.map((brand) => ({
            value: brand.id,
            label: brand.name,
          }))
        );
      })
      .catch(() => {
        setShowError(true);
      });

    categoryService
      .getAllCategories()
      .then((categories) => {
        setCategoryOptions(
          categories.map((category) => ({
            value: category.id,
            label: category.name,
          }))
        );
      })
      .catch(() => {
        setShowError(true);
      });
  }, []);

  const { ...methods } = useForm();
  const onSubmit = (data) => {
    setIsCreating(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    productService
      .addProduct({
        name: data.name,
        description: data.description,
        categoryId: data.category,
        brandId: data.brand,
        model: data.model,
        unit: data.unit,
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
        setShowError(true);
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  useEffect(() => {
    if (isCreating) {
      setShowError(false);
    }

    if (showPopUp || showError) {
      setIsCreating(false);
    }
  }, [isCreating, showPopUp, showError]);

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
      {showError && (
        <div className="my-4 flex items-center justify-center">
          <div className="text-lg font-medium text-red-500">
            Ha ocurrido un error
          </div>
        </div>
      )}
      <form id="productForm" onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-bold">Composición del producto</h1>
        {isCreating && (
          <div className="mt-4 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        )}
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
            <TextInput label="Modelo" name={"model"} required={false} />
            <TextInput
              label="Precio"
              name="price"
              min={1}
              type="number"
              placeholder="$"
            />
            <TextInput
              label="Stock"
              name={"stock"}
              min={1}
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
            disabled={isCreating}
          >
            {isCreating ? "Procesando" : "Añadir producto"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
export default CreateProduct;
