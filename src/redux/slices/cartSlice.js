import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: "",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        const newItem = action.payload;
        const existingItem = state.cart.find((item) => newItem.id === item.id);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.cart.push({
            ...newItem,
            quantity: 1,
          });
        }
      },
    },

    removeItem(state, action) {
      const item = action.payload;
      const exists = state.cart.find((oldItems) => oldItems.id === item.id);
      if (exists.quantity > 1) {
        exists.quantity--;
      } else {
        const index = state.cart.findIndex(
          (oldItems) => oldItems.id === item.id
        );
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
