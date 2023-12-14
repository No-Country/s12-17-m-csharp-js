import apiClient from "./api-client";

class CategoryService {
  getAllCategories() {
    return apiClient
      .get("/Categorias")
      .then((response) => {
        return response.data.map((category) => ({
          id: category.id,
          name: category.nombre,
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all categories: " +
            error.message
        );
      });
  }
}

const brandService = new CategoryService();
export default brandService;
