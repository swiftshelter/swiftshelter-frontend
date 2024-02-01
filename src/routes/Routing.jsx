// Routing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        

        <Route element={<ProtectedRoute />}>
          <Route path={"dashboard"} element={<Dashboard />} />
        </Route>
        {/*All*/}
        {/* <Route path="*" element={<Error />} /> */}
      </Route>
    </Routes>
  );
}

export default Routing;
