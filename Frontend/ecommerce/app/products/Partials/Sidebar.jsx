import React from "react";
import FilterSection from "./FilterSection";
import { FormProvider, useForm } from "react-hook-form";

const Sidebar = () => {
  const { ...methods } = useForm();

  const allFieldValues = methods.watch();
  console.log(allFieldValues);

  return (
    <div className="w-[calc(100%+3rem)] lg:w-72">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <button
          onClick={() => {
            methods.reset();
          }}
          className="rounded-3xl border border-slate-300 px-4 py-2 text-xs text-gray-600 transition-transform hover:scale-105 hover:text-gray-800"
        >
          Limpiar todo
        </button>
      </span>
      <FormProvider {...methods}>
        <form className="mt-4 rounded-lg border border-slate-200 p-4 pb-6">
          <FilterSection
            name="category"
            title="Categoría"
            options={[
              { label: "Muebles", value: "1" },
              { label: "Gaming", value: "2" },
              { label: "Celulares", value: "3" },
            ]}
          />
          <hr className="my-6 border border-slate-200" />
          <FilterSection
            name="condition"
            title="Condición"
            options={[
              { label: "Nuevo", value: "Nuevo" },
              { label: "Usado", value: "Usado" },
            ]}
          />
          <hr className="my-6 border border-slate-200" />
          <FilterSection
            name="brand"
            title="Marca"
            options={[
              { label: "Samsung", value: "1" },
              { label: "Apple", value: "2" },
              { label: "Huawei", value: "3" },
            ]}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Sidebar;
