import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
    removeItem(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
