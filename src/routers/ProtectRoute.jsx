import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useSelector } from "react-redux";

export default function ProtectRoute({ children }) {
  const { status, currentUser } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (status === "unLogged") {
        navigate("/login");
      }
    },
    [status]
  );
  return currentUser.displayName ? children : "";
}
