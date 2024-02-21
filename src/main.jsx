import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          draggable
          theme="light"
          transition={Bounce}
        ></ToastContainer>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
