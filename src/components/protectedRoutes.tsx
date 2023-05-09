import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const [user, setUser] = useState({});

  return user ? <Outlet /> : <Navigate to={"/"} replace />;
};
