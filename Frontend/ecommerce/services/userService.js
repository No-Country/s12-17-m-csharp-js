import apiClient from "./apiClient";

class UserService {
  signIn({ email, password }) {
    return apiClient
      .post("/Cuentas/login", {
        email,
        password,
      })
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to sign in: " + error.message,
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
      .catch((error) => {
        throw new Error(
          "An error occurred while trying to sign up: " + error.message,
        );
      });
  }
}

const userService = new UserService();
export default userService;
