const loginUser = async ({ email, password }) => {
  const response = await fetch(
    "https://www.ecommerceback.somee.com/api/Cuentas/login",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error at login user");
  }

  return await response.text();
};

const registerUser = async ({ first_name, last_name, email, password }) => {
  const response = await fetch(
    "https://www.ecommerceback.somee.com/api/Cuentas/registro",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        nombre: first_name,
        apellido: last_name,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error while registering user");
  }

  return await loginUser({ email, password });
};

export { loginUser, registerUser };
