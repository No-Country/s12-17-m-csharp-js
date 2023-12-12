import create from 'zustand';

const useStore = create((set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },

  // Otras acciones del carrito de compras
}));

export default useStore;
