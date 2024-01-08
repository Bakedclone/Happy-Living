import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


import Home from './pages/home';
import Login from './Components/Auth/login';
import Register from './Components/Auth/register';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="403861446560-eiqnq97vml7fmis1a36qu5v3nc01j6jt.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
