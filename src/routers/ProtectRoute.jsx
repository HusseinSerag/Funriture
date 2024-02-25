import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useSelector } from "react-redux";

export default function ProtectRoute({ children }) {
  const currentUser = useSelector((store) => store.user.currentUser);

  const navigate = useNavigate();
  useEffect(
    function () {
      if (!currentUser.displayName) {
        navigate("/login");
      }
    },
    [currentUser.displayName]
  );
  return currentUser.displayName ? children : "";
}
