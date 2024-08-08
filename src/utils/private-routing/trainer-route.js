import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import {
  selectIsLoadingAuth,
  selectIsAuthenticated,
  selectUserRole
} from "store/user/user.selector";

const TrainerRoutes = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoadingAuth);
  const userRole = useSelector(selectUserRole);

  return !isLoading && isAuthenticated && userRole === "Trainer" ? (
    <Outlet />
  ) : (
    <Navigate to="login" />
  );
};

export default TrainerRoutes;
