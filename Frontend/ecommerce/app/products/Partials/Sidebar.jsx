"use client";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSection from "./FilterSection";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { usePushQueryString } from "@/hooks";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize form methods
  const methods = useForm();
  const { watch, setValue } = methods;

  const categoryId = watch("categoryId");
  const brandId = watch("brandId");
  const productCondition = watch("productCondition");

  const pushQueryString = usePushQueryString();

  useEffect(() => {
    if (!searchParams) return;

    // Get the values from the URL query parameters
    const categoryId = searchParams.get("categoryId") ?? "";
    const brandId = searchParams.get("brandId") ?? "";
    const productCondition = searchParams.get("productCondition") ?? "";

    // Update the form state to match the URL query parameters
    setValue("categoryId", categoryId);
    setValue("brandId", brandId);
    setValue("productCondition", productCondition);
  }, [searchParams, setValue]);

  useEffect(() => {
    pushQueryString({
      categoryId,
      brandId,
      productCondition,
    });
  }, [categoryId, brandId, productCondition, pushQueryString]);

  return (
    <div className="w-[calc(100%+3rem)] lg:w-72">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <button
          onClick={() => {
            router.push("/products");
          }}
          className="rounded-3xl border border-slate-300 px-4 py-2 text-xs text-gray-600 transition-transform hover:scale-105 hover:text-gray-800"
        >
          Limpiar todo
        </button>
      </span>
      <FormProvider {...methods}>
        <form className="mt-4 rounded-lg border border-slate-200 p-4 pb-6">
          <FilterSection
            name="categoryId"
            title="Categoría"
            options={[
              { label: "Celulares", value: "2" },
              { label: "Games", value: "1" },
              { label: "Muebles", value: "3" },
            ]}
            defaultValue={categoryId}
          />
          <hr className="my-6 border border-slate-200" />
          <FilterSection
            name="productCondition"
            title="Condición"
            options={[
              { label: "Nuevo", value: "Nuevo" },
              { label: "Usado", value: "Usado" },
            ]}
            defaultValue={productCondition}
          />
          <hr className="my-6 border border-slate-200" />
          <FilterSection
            name="brandId"
            title="Marca"
            options={[
              { label: "Samsung", value: "1" },
              { label: "Apple", value: "2" },
              // { label: "Sin marca", value: "3" },
              { label: "Play Station", value: "4" },
              { label: "Nintendo", value: "5" },
              { label: "Xbox", value: "6" },
              { label: "Xiaomi", value: "7" },
              { label: "Black+Decker", value: "8" },
            ]}
            defaultValue={brandId}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Sidebar;
