function hasUppercaseLowercaseNumber(text) {
  // Verifica si el texto tiene al menos una letra mayúscula, una letra minúscula y un número
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;

  return (
    uppercaseRegex.test(text) &&
    lowercaseRegex.test(text) &&
    numberRegex.test(text)
  );
}

export const registerValidations = {
  firstName: {
    required: "Se necesita ingresar un nombre.",
  },
  lastName: {
    required: "Se necesita ingresar un apellido.",
  },
  email: {
    required: "Se necesita ingresar un email.",
  },
  password: {
    required: "Se necesita ingresar una contraseña.",
    minLength: {
      value: 8,
      message: "La contraseña debe tener al menos 8 caracteres.",
    },
    validate: {
      isValid: (data) => {
        if (!hasUppercaseLowercaseNumber(data)) {
          return "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números.";
        }
      },
    },
  },
  passwordConfirmation: {
    required: "Se necesita ingresar una confirmación de contraseña.",
  },
};

export const loginValidations = {
  email: {
    required: "Se necesita ingresar un email.",
  },
  password: {
    required: "Se necesita ingresar una contraseña.",
    minLength: {
      value: 8,
      message: "La contraseña debe tener al menos 8 caracteres.",
    },
  },
};

export const productValidations = {
  name: {
    required: "Se necesita ingresar un nombre.",
    maxLength: {
      value: 255,
      message: "El nombre debe tener como máximo 40 caracteres.",
    },
  },
  description: {
    required: "Se necesita ingresar una descripción.",
    maxLength: {
      value: 255,
      message: "La descripción debe tener como máximo 160 caracteres.",
    },
  },
  brand: {
    required: "Se necesita ingresar una marca.",
    maxLength: {
      value: 255,
      message: "La marca debe tener como máximo 40 caracteres.",
    },
  },
  category: {
    required: "Se necesita ingresar una categoría.",
  },
  model: {
    required: "Se necesita ingresar un modelo.",
    maxLength: {
      value: 255,
      message: "El modelo debe tener como máximo 40 caracteres.",
    },
  },
  price: {
    required: "Se necesita ingresar un precio.",
    min: {
      value: 0,
      message: "El precio debe ser mayor a 0.",
    },
    validate: {
      isNumber: (data) => {
        if (isNaN(data)) {
          return "El precio debe ser un número.";
        }
      },
    },
  },
  stock: {
    required: "Se necesita ingresar un stock.",
    min: {
      value: 0,
      message: "El stock debe ser mayor a 0.",
    },
    validate: {
      isNumber: (data) => {
        if (isNaN(data)) {
          return "El stock debe ser un número.";
        }
      },
    },
  },
  productCondition: {
    required: "Se necesita ingresar el estado del producto.",
  },
};
