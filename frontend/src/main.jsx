import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignInView from "./views/SignInView.jsx";
import SignUpView from "./views/SignUpView.jsx";
import AppDashboard from "./views/AppDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signIn" element={<SignInView />} />
        <Route path="/signUp" element={<SignUpView />} />
        <Route path="/appDashboard" element={<AppDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
