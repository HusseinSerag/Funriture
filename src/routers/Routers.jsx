import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Register = lazy(() => import("../pages/Register"));
const Cart = lazy(() => import("../pages/Cart"));

const Login = lazy(() => import("../pages/Login"));

const Checkout = lazy(() => import("../pages/Checkout"));
import Description from "../components/Description/Description";
import Reviews from "../components/Reviews/Reviews";
import ProtectRoute from "./ProtectRoute";
import SpinnerFullPage from "../components/SpinnerFullPage/SpinnerFullPage";

export default function Routers() {
  const location = useLocation();
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectRoute>
              <Shop />
            </ProtectRoute>
          }
        />
        <Route
          path="/shop/:id"
          element={
            <ProtectRoute>
              <ProductDetails />
            </ProtectRoute>
          }
        >
          <Route index element={<Navigate replace to="description" />} />
          <Route path="description" element={<Description />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="/cart"
          element={
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <ProtectRoute>
              <Checkout />
            </ProtectRoute>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}
