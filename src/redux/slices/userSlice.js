import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {
  currentUser: {},
  isLoading: false,
  status: "unLogged",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        state.currentUser = action.payload.currentUser;
        state.status = action.payload.status;
      },
    },
  },
});
export const fetchUser = () => {
  return function (dispatch, getState) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = {
          displayName: user.providerData.displayName,
          uid: user.providerData.uid,
        };
        dispatch({
          type: "user/setUser",
          payload: { currentUser: data, status: "unLogged" },
        });
      } else {
        dispatch({
          type: "user/setUser",
          payload: { currentUser: {}, status: "unLogged" },
        });
      }
    });
  };
};
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
