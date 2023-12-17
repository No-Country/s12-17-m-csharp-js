import React from "react";
import FilterSection from "./FilterSection";
import { FILTERS } from "@/constants/productFilters";

const Sidebar = ({ setCategory, setCondition, setPriceRange }) => {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const filterHandlers = {
    category: handleCategoryChange,
    condition: handleConditionChange,
    price: handlePriceChange,
  };

  return (
    <div className="w-56 lg:w-72">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <button
          onClick={() => {
            setCategory("");
            setCondition("");
            setPriceRange("");
          }}
          className="rounded-3xl border border-slate-300 px-4 py-2 text-xs text-gray-600 transition-transform hover:scale-105 hover:text-gray-800"
        >
          Limpiar todo
        </button>
      </span>
      <div className="mt-4 rounded-lg border border-slate-200 p-4 pb-6">
        {FILTERS.map((filter, index) => (
          <React.Fragment key={index}>
            <FilterSection {...filter} onChange={filterHandlers[filter.name]} />
            {index < FILTERS.length - 1 && (
              <hr className="my-6 border border-slate-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
