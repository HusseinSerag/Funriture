import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import products from "../../assets/data/products";

const initialState = {
  products: [],
  error: "",
  isLoading: false,
  currentProduct: {},
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
      }),
      builder.addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(getProduct.pending, (state, action) => {
        state.error = "";
        state.isLoading = true;
      }),
      builder.addCase(getProduct.rejected, (state, action) => {
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
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const docRef = doc(db, "products", id);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    return { ...snap.data(), id: snap.id };
  } else {
    return "No Product is found!";
  }
});

export const addReview = createAsyncThunk(
  "product/addReview",
  async ({ review, id }) => {
    const reviewsRef = doc(db, "products", id);
    await updateDoc(reviewsRef, {
      reviews: arrayUnion(review),
    });
  }
);

export const {} = productSlice.actions;

export default productSlice.reducer;
