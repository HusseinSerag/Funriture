import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/slices/productSlice";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}
