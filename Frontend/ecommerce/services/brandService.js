import apiClient from "./apiClient";

class BrandService {
  getAllBrands() {
    return apiClient
      .get("/Marcas")
      .then((response) => {
        return response.data.map((brand) => ({
          id: brand.id,
          name: brand.nombre[0].toUpperCase() + brand.nombre.slice(1),
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all brands: " + error.message
        );
      });
  }

  getBrandById(brandId) {
    return apiClient
      .get(`/Marcas/${brandId}`)
      .then((response) => {
        const brand = response.data;
        return {
          id: brand.id,
          name: brand.nombre[0].toUpperCase() + brand.nombre.slice(1),
        };
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get brand by id: " + error.message
        );
      });
  }
}

const brandService = new BrandService();
export default brandService;
