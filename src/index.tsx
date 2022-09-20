import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Home, Login, Signup } from "./pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
