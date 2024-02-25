import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

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
        state.isLoading = false;
      },
    },

    setCart(state, action) {
      state.currentUser.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      }),
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.status = "logged";
      }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.error == "") {
          state.isLoading = false;
          return;
        } else {
          state.currentUser = action.payload;
          state.status = "logged";
          state.isLoading = false;
        }
      }),
      builder.addCase(logoutUser.fulfilled, (state, action) => {
        state.currentUser = {};
        state.status = "unLogged";
      });
  },
});
export function addItem(item) {
  return async function (dispatch, getState) {
    const user = getState().user.currentUser;
    let newCart = [];
    if (user.cart.length === 0) {
      newCart.push({ ...item, quantity: 1 });
    } else {
      newCart = [...user.cart];
      const found = newCart.find((idItem) => idItem.id === item.id);
      if (found) {
        newCart = newCart.map((items) =>
          items.id !== found.id
            ? items
            : { ...found, quantity: found.quantity + 1, reviews: found.reviews }
        );
      } else {
        newCart.push({ ...item, quantity: 1 });
      }
    }

    await talkWithDB(user.uid, newCart, dispatch);
  };
}
export function removeItem(item) {
  return async function (dispatch, getState) {
    const user = getState().user.currentUser;
    let newCart = [...user.cart];
    const exists = newCart.find((oldItems) => oldItems.id === item.id);
    if (exists.quantity > 1) {
      newCart = newCart.map((items) =>
        items.id !== item.id ? items : { ...item, quantity: items.quantity - 1 }
      );
    } else {
      const index = newCart.findIndex((items) => items.id === item.id);
      newCart.splice(index, 1);
    }

    await talkWithDB(user.uid, newCart, dispatch, "Item removed from cart!");
  };
}

async function talkWithDB(uid, newCart, dispatch, message) {
  const docRef = doc(db, "users", uid);
  try {
    await updateDoc(docRef, {
      cart: newCart,
    });
    dispatch({ type: "user/setCart", payload: newCart });

    message && toast.success(message);
  } catch (err) {
    toast.error("Something went wrong!");
  }
}
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password, navigate }) => {
    {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        toast.success("Successfully logged in");
        navigate("/home");
        return {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        };
      } catch (err) {
        toast.error(err.message);
        return { error: "" };
      }
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email, password, files, username, navigate }) => {
    try {
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, files);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = userCredential.user;
            updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
              cart: [],
            });

            toast.success("Successfully registered!");
            navigate("/");
          });
        }
      );
    } catch (err) {
      toast.error("Something went wrong!");
    }
  }
);

export const fetchUser = () => {
  return function (dispatch, getState) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const reference = doc(db, "users", user.uid);
        const snap = await getDoc(reference);

        dispatch({
          type: "user/setUser",
          payload: {
            currentUser: snap.data(),
            status: "logged",
          },
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

export const logoutUser = createAsyncThunk("user/logout", async () => {
  signOut(auth)
    .then(() => {
      toast.success("Logged Out");
    })
    .catch((err) => {
      toast.error(err.message);
    });
});
export const { setUser, addToUserCart, removeItemFromCart } = userSlice.actions;
export default userSlice.reducer;
