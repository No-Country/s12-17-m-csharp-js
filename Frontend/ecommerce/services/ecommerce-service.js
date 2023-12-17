import apiClient from "./api-client";


class EcommerceService{
    
    getProducts(){
        return apiClient
        .get("/Producto/Busqueda")        
        .catch((error) => {
        throw new Error(
          "An error occurred while trying to sign in: " + error.message
        );
      });
    }
}

const ecommerceService = new EcommerceService();
export default ecommerceService;