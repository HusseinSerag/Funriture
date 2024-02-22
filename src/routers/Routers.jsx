import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Description from "../components/Description/Description";
import Reviews from "../components/Reviews/Reviews";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />}>
        <Route index element={<Navigate replace to="description" />} />
        <Route path="description" element={<Description />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
