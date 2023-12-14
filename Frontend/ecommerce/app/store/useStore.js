import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }], // Añadir producto con cantidad
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },

  incrementQuantity: (productId) => {
    set((state) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 }; // Incrementar cantidad
        }
        return product;
      });
      return { cart: updatedCart };
    });
  },

  decrementQuantity: (productId) => {
    set((state) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 }; // Decrementar cantidad si es mayor que 1
        }
        return product;
      });
      return { cart: updatedCart };
    });
  },

  removeAllFromCart: () => {
    set({ cart: [] }); // Reinicia el carrito a un array vacío
  },

  // Otras acciones del carrito de compras
  isInCart: (productId) => {
    return useStore.getState().cart.some((product) => product.id === productId); // Comprueba si el producto está en el carrito
  },

  toggleProductInCart: (product) => {
    set((state) =>
       state.isInCart(product.id)
        ? state.removeFromCart(product.id)
        : state.addToCart(product)
    );
  },
}));

export default useStore;