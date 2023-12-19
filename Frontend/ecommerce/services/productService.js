import apiClient from "./apiClient";

class ProductService {
  /**
   * Adds a new product.
   *
   * @param {Object} product - The product to add.
   * @param {string} product.name - The name of the product.
   * @param {string} product.description - The description of the product.
   * @param {number} product.categoryId - The ID of the product's category.
   * @param {number} product.brandId - The ID of the product's brand.
   * @param {string} product.model - The model of the product.
   * @param {string} product.unit - The unit of the product.
   * @param {number} product.currentStock - The current stock of the product.
   * @param {string} product.productCondition - The condition of the product.
   * @param {number} product.price - The price of the product.
   * @param {Array} product.images - The images of the product.
   */
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
    images,
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
      Imagen1: images[0],
      Imagen2: images[1],
      Imagen3: images[2],
      Imagen4: images[3],
    };

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return apiClient
      .post("/Producto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to add product: " + error.message,
        );
      });
  }

  getProductById(id) {
    return apiClient.get("/producto/busquedaxid?id=" + id).then((response) => {
      const product = response.data;

      return {
        id: product.id,
        name: product.nombre,
        description: product.descripcion,
        userId: product.usuarioId,
        category: {
          id: product.categoria.id,
          name: product.categoria.nombre,
        },
        brand: {
          id: product.marca.id,
          name: product.marca.nombre,
        },
        model: product.modelo,
        unit: product.unidad,
        active: product.activo,
        currentStock: product.stock_Actual,
        productCondition: product.estado,
        price: product.precio,
        images: product.imagenes,
      };
    });
  }

  getAllProducts({
    itemsPerPage = "10",
    pageNumber = "1",
    categoryId = "",
    brandId = "",
    productConditon = "",
  } = {}) {
    return apiClient
      .get(
        [
          "/Producto/Busqueda",
          `?regXPagina=${itemsPerPage}`,
          `&paginaActual=${pageNumber}`,
          `&idCategoria=${categoryId}`,
          `&idMarca=${brandId}`,
          `&estado=${productConditon}`,
        ].join(""),
      )
      .then((response) => {
        return response.data.productos.map((product) => ({
          id: product.id,
          name: product.nombre,
          description: product.descripcion,
          userId: product.usuarioId,
          category: {
            id: product.categoria.id,
            name: product.categoria.nombre,
          },
          brand: {
            id: product.marca.id,
            name: product.marca.nombre,
          },
          model: product.modelo,
          unit: product.unidad,
          active: product.activo,
          currentStock: product.stock_Actual,
          productCondition: product.estado,
          price: product.precio,
          images: product.imagenes,
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all products: " +
            error.message,
        );
      });
  }

  getUserProducts() {
    return apiClient
      .get("/producto/misproductos")
      .then((response) => {
        return response.data.map((product) => ({
          id: product.id,
          name: product.nombre,
          description: product.descripcion,
          userId: product.usuarioId,
          category: {
            id: product.categoria.id,
            name: product.categoria.nombre,
          },
          brand: {
            id: product.marca.id,
            name: product.marca.nombre,
          },
          model: product.modelo,
          unit: product.unidad,
          active: product.activo,
          currentStock: product.stock_Actual,
          productCondition: product.estado,
          price: product.precio,
          images: product.imagenes,
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all products: " +
            error.message,
        );
      });
  }

  deactivateProduct(id) {
    return apiClient.put("/producto/desactivar?id=" + id).catch((error) => {
      throw new Error(
        "An error occurred while trying to deactivate product: " +
          error.message,
      );
    });
  }
}

const productService = new ProductService();
export default productService;
