export const routes = [
  {
    name: "Inicio",
    path: "/",
    protected: false,
  },
  {
    name: "Productos",
    path: "/products",
    protected: false,
  },
  {
    name: "Panel de control",
    path: "/control_panel",
    protected: true,
  },
];
