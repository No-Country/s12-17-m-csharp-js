import apiClient from "./apiClient";

class UserService {
  signIn({ email, password }) {
    return apiClient
      .post("/Cuentas/login", {
        email,
        password,
      })
      .then((response) => {
        const user = response.data;
        return {
          email: user.email,
          firstName: user.nombre,
          lastName: user.apellido,
          token: user.token,
        };
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to sign in: " + error.message
        );
      });
  }

  signUp({ firstName, lastName, email, password }) {
    return apiClient
      .post("/Cuentas/registro", {
        nombre: firstName,
        apellido: lastName,
        email,
        password,
      })
      .then((response) => {
        const user = response.data;
        return {
          email: user.email,
          firstName: user.nombre,
          lastName: user.apellido,
          token: user.token,
        };
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to sign up: " + error.message
        );
      });
  }

  dataUser() {
    return apiClient
      .get("Datos/MisDatos")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to obtain data: " + error.message
        );
      });
  }

  updateData(datas, id) {
    return apiClient
      .put("/Datos?id=" + id, datas)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(
          "An error occurred while trying to update data: " + error.message
        );
      });
  }
}

const userService = new UserService();
export default userService;
