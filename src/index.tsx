import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Login />);
