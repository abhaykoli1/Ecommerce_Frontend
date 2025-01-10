import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();

  // Read authentication status from local storage
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  // Public paths accessible without authentication
  const publicPaths = ["/", ""];

  // Prevent authenticated users from accessing login or register pages
  if (
    isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/" />;
  }

  // Allow unauthenticated users to access public paths
  if (!isAuthenticated && publicPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export default CheckAuth;
