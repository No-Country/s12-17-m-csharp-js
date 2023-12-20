import apiClient from "./apiClient";

class OrderService {
  postOrder(data) {
    return new Promise((resolve, reject) => {
      apiClient
        .post("pedidos", data)
        // .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          console.log(error);
          reject(error);
        });
    });
  }

  getMyOrders() {
    return apiClient
      .get("/Pedidos/MisPedidos")
      .then((response) => {
        return response.data.map((product) => ({
          id: product.id,
          date: new Date(product.fecha_inicio).toLocaleDateString("es-AR"),
          total: product.total,
          state: product.estadoPedido,
          products: product.renglones_Pedidos.map((prods) => ({
            id: prods.id,
            line: prods.renglon,
            productId: prods.productoId,
            orderId: prods.pedidoId,
            product: {
              id: prods.producto.id,
              name: prods.producto.nombre,
              description: prods.producto.descripcion,
              categoryId: prods.producto.categoriaId,
              brandId: prods.producto.marcaId,
              model: prods.producto.modelo,
              unit: prods.producto.unidad,
              state: prods.producto.estado,
              price: prods.producto.precio,
              images: prods.producto.imagenes.map((i) => ({
                id: i.id,
                name: i.nombre,
                url: i.url,
              })),
            },
            quantity: prods.cantidad,
            price: prods.precio,
            subTotal: prods.totalrenglon,
          })),
        }));
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to get all orders: " + error.message
        );
      });
  }
}

const orderService = new OrderService();
export default orderService;
