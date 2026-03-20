import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/common/Home";
import Register from "../pages/common/Register";
import Login from "../pages/common/Login";
import AdminHome from "../pages/admin/AdminHome";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/:adminId/home"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
