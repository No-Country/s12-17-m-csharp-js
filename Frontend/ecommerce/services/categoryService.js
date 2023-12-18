import apiClient from "./apiClient";

class CategoryService {
  getAllCategories() {
    return apiClient
      .get("/categorias")
      .then((response) => {
        return response.data.map((category) => ({
          id: category.id,
          name: category.nombre,
        }));
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
}

const brandService = new CategoryService();
export default brandService;
