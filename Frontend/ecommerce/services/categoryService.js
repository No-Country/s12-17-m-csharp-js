import apiClient from "./apiClient";

class CategoryService {
  getAllCategories() {
    return apiClient
      .get("/categorias")
      .then((response) => {
        return (
          response.data
            // Turn properties into their english equivalent
            .map((category) => ({
              id: category.id,
              name: category.nombre,
            }))
            // Sort categories alphabetically
            .sort((a, b) => a.name.localeCompare(b.name))
        );
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all categories: " +
            error.message,
        );
      });
  }

  getCategoryById(categoryId) {
    return apiClient
      .get(`/categorias/${categoryId}`)
      .then((response) => {
        return {
          id: response.data.id,
          name: response.data.nombre,
        };
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get category by id: " +
            error.message,
        );
      });
  }

  getCategoryByName(categoryName) {
    return apiClient
      .get("/categorias")
      .then((response) => {
        const category = response.data.find((categorias) => {
          return categorias.nombre.toLowerCase() === categoryName.toLowerCase();
        });

        if (category) {
          return {
            id: category.id,
            name: category.nombre,
          };
        }

        return null;
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get category by name: " +
            error.message,
        );
      });
  }
}

const brandService = new CategoryService();
export default brandService;
