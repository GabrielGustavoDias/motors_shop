import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { ProtectedRoutes } from "../components";

import {
  Login,
  Register,
  Home,
  SellerPage,
  LoggedUserProfile,
  AdDetailPage,
} from "../pages";
import { RecoverPass } from "../pages/recoverPassPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<LoggedUserProfile />} />
      </Route>
      <Route
        path="/users/resetPassword/:resetToken"
        element={<RecoverPass />}
      />
      <Route path="/advertisement/:id" element={<AdDetailPage />} />
      <Route path="/users/:id" element={<SellerPage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};
