import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import ProtectedRoute from "react-protected-route";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// Admin
import Dashboard from "views/admin/Dashboard";
import Maps from "views/admin/Maps";
import Settings from "views/admin/Settings";
import Tables from "views/admin/Tables";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Login from "views/auth/Login";
import Register from "views/auth/Register";

const isLoggedIn = false;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Routes with layouts */}
        <Route path="admin" exact element={<Admin />} >
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="/admin/maps" element={<Maps/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="/admin/tables" element={<Tables/>} /> 
            {/* /* <Navigate from="/admin" to="/admin/dashboard" /> */}
        </Route>
        <Route path="auth" exact element={<Auth />} >
          <Route path="login" exact element={<Login />} />
          <Route path="register" exact element={<Register />} />
        </Route>

        /* Routes without layouts */
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Index />} />

        /* Redirect for unmatched routes */
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
