import apiClient from "./api-client";

class ProductService {
  addProduct({
    name,
    description,
    categoryId,
    brandId,
    model,
    unit,
    currentStock,
    productCondition,
    price,
    // images,
    image1,
    image2,
    image3,
  }) {
    const formData = new FormData();
    const data = {
      nombre: name,
      Descripcion: description,
      CategoriaId: categoryId,
      MarcaId: brandId,
      Modelo: model,
      Unidad: unit,
      Estado: productCondition,
      Stock_Actual: currentStock,
      precio: price,
      Imagen1: image1,
      Imagen2: image2,
      Imagen3: image3,
    };
    console.log(image1);

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // for (let i = 0; i < 3; i++) {
    //   formData.append(`Imagen${i + 1}`, images[i]);
    // }
    // images.forEach((fileItem, index) => {
    //   formData.append(`Imagen${index + 1}`, fileItem.file);
    // });

    return apiClient
      .post("/Producto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to add product: " + error.message
        );
      });
  }
}

const productService = new ProductService();
export default productService;
