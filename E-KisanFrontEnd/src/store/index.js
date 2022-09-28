import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
  price: 0,
  isauth: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      localStorage.setItem("cart", JSON.stringify(state));
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    login(state) {
      state.isauth = true;
      localStorage.setItem("auth", JSON.stringify(state));
      localStorage.setItem("cart", JSON.stringify(state));
    },
    logout(state) {
      localStorage.removeItem("cart");
      localStorage.removeItem("auth");
      return {
        ...state,
        isauth: false,
        totalQuantity: 0,
      };
    },
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialCartState,
//   reducers: {
//     login(state) {
//       state.isauth = true;
//       localStorage.setItem('auth', JSON.stringify(state));
//       localStorage.setItem('cart', JSON.stringify(state));
//     },
//     logout(state) {
//       localStorage.removeItem("cart");
//       localStorage.removeItem("auth");
//       console.log(state.totalQuantity);
//       return {
//         ...state,
//         isauth: false,
//         totalQuantity:0
//       };
//     },
//   },
// });

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    // auth: authSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
// export const authActions = authSlice.actions;
export default store;
