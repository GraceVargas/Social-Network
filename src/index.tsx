import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Home />);
