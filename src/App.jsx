import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Page/Home/Home";
import AdminLogin from "./Components/admin/adminLogin";
import AdminSignUp from "./Components/admin/AdminSignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ps-admin" element={<AdminLogin />} />
        <Route path="/auth-register" element={<AdminSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
