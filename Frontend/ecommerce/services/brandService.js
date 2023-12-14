import apiClient from "./api-client";

class BrandService {
  getAllBrands() {
    return apiClient
      .get("/Marcas")
      .then((response) => {
        return response.data.map((brand) => ({
          id: brand.id,
          name: brand.nombre,
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all brands: " + error.message
        );
      });
  }
}

const brandService = new BrandService();
export default brandService;
