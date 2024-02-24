import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: { cart: cartSlice, user: userSlice, product: productSlice },
});
export default store;
