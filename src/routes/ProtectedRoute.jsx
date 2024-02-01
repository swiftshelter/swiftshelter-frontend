import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  let user = true;
  return !user ? <Outlet />   : <Navigate to={"/"} />  ;
}

export default ProtectedRoute;