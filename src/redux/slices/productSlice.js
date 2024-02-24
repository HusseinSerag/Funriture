import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import products from "../../assets/data/products";

const initialState = {
  products: [],
  error: "",
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    }),
      builder.addCase(getAllProducts.pending, (state, action) => {
        state.error = "";
        state.isLoading = true;
      }),
      builder.addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const collectionRef = collection(db, "products");
    try {
      const data = await getDocs(collectionRef);
      const correctData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return correctData;
    } catch (err) {
      return err;
    }
  }
);

export const {} = productSlice.actions;

export default productSlice.reducer;
