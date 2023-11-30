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

export const register_validations = [
    {
        required: "Se necesita ingresar un nombre."
    },
    {
        required: "Se necesita ingresar un apellido.",
    },
    {
        required: "Se necesita ingresar un email.",
    },
    {
        required: "Se necesita ingresar una contraseña.",
        minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres."
        },
        validate: {
            isValid: (data) => {
                if (!hasUppercaseLowercaseNumber(data)) {
                    return "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números."
                }
            }
        }
    },
    {
        required: "Se necesita ingresar una confirmación de contraseña."
    }
];

export const login_validations = [
    {
        required: "Se necesita ingresar un email.",
    },
    {
        required: "Se necesita ingresar una contraseña.",
        minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres."
        }
    }
];
