import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import {
  selectIsLoadingAuth,
  selectIsAuthenticated,
  selectUserRole
} from "store/user/user.selector";

const AdminRoutes = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoadingAuth);
  const userRole = useSelector(selectUserRole);

  return !isLoading && isAuthenticated && userRole === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to="login" />
  );
};

export default AdminRoutes;
