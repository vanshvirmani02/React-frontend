import {  Navigate, Outlet  } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = JSON.parse(atob(token.split(".")[1])).role; // Access token and role from Redux store

  if (!token) return <Navigate to="/login" />; // If no token, redirect to login

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
