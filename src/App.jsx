import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./redux/slices/userSlice";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  useEffect(function () {
    dispatch(fetchUser());
  }, []);

  return isLoading ? <SpinnerFullPage /> : <Layout />;
}
