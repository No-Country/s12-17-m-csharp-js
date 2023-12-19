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
}

const orderService = new OrderService();
export default orderService;
