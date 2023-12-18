export const FILTERS = [
  {
    title: "Categoría",
    options: [
      { label: "Electronics", value: "electronics" },
      { label: "Jewelry", value: "jewelry" },
    ],
    name: "category",
    inputType: "checkbox",
  },
  {
    title: "Condición",
    options: [
      { label: "Nuevo", value: "nuevo" },
      { label: "Usado", value: "usado" },
    ],
    name: "condition",
    inputType: "radio",
  },
  {
    title: "Precio",
    options: [
      { label: "0 - 50", value: "0-50" },
      { label: "50 - 200", value: "50-200" },
      { label: "200 - 500", value: "200-500" },
      { label: "500 - 1000", value: "500-1000" },
      { label: "1000 - ...", value: "1000-" },
    ],
    name: "price",
    inputType: "radio",
  },
];
