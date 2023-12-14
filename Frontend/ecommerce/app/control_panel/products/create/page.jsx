"use client";
import { brandService, categoryService, productService } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextAreaInput,
  TextInput,
  SelectInput,
  RadioInputGroup,
} from "./Partials";
import { useDropzone } from "react-dropzone";
import "filepond/dist/filepond.min.css";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

const CreateProduct = () => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [images, setImages] = useState([]);

  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );

  const onDrop = useCallback((acceptedFiles) => {
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
    },
    maxFiles: 3,
    maxSize: 10_000_000,
  });

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    images.forEach((fileItem, index) => {
      data[`image${index + 1}`] = fileItem.file;
    });

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
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const forceSubmit = () => {
  //   console.log("force submit");
  //   const formData = new FormData();
  //   // Append files
  //   images.forEach((fileItem, index) => {
  //     formData.append(`Imagen${index + 1}`, fileItem.file);
  //   });

  //   // Log keys and values
  //   for (let [key, value] of formData.entries()) {
  //     console.log(key, value);
  //   }
  // };

  return (
    <form id="productForm" onSubmit={handleSubmit(onSubmit)}>
      {/* <h1 onClick={forceSubmit} className="text-4xl font-bold">
        Composición del producto
      </h1> */}
      <h1 className="text-4xl font-bold">Composición del producto</h1>
      <div className="grid grid-cols-1 gap-6 mt-10">
        <TextInput
          label="Nombre"
          placeholder={"Titulo del producto a vender"}
          register={register}
          registerName={"name"}
          errors={errors}
        />

        <TextAreaInput
          label={"Descripción"}
          placeholder={"Breve descripción del producto a vender..."}
          register={register}
          registerName={"description"}
          errors={errors}
        />

        <div className="grid grid-cols-2 gap-12">
          <SelectInput
            label="Categoría"
            name="category"
            options={categoryOptions}
            register={register}
            registerName={"category"}
            errors={errors}
          />
          <SelectInput
            label="Marca"
            name="brand"
            options={brandOptions}
            register={register}
            registerName={"brand"}
            errors={errors}
          />
          <TextInput
            label="Modelo"
            isRequired={false}
            placeholder={""}
            register={register}
            registerName={"model"}
            errors={errors}
          />
          <TextInput
            label="Precio"
            name="price"
            type="number"
            register={register}
            registerName={"price"}
            errors={errors}
            placeholder="$"
            messageValidation="A cuánto quieres vender tu producto"
          />
          <TextInput
            label="Stock"
            type="number"
            register={register}
            registerName={"stock"}
            errors={errors}
            placeholder="1"
            messageValidation="Que cantidad de productos tienes"
          />
          <TextInput
            label="Unidad"
            placeholder={"unidad"}
            register={register}
            registerName={"unit"}
            errors={errors}
          />
          <RadioInputGroup
            register={register}
            registerName={"productCondition"}
            errors={errors}
            title="Estado del producto:"
            name="productCondition"
            options={["Nuevo", "Usado"]}
          />
        </div>
      </div>

      <div className="mt-8">
        <FilePond
          {...register("images")}
          files={images}
          onupdatefiles={setImages}
          allowMultiple={true}
          maxFiles={3}
          name="files"
          allowReorder={true}
          labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">Buscalos</span>'
          required
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
  );
};
export default CreateProduct;
