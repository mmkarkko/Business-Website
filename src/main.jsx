import ReactDOM from 'react-dom/client'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import App from './App.jsx';
import "./variables.css";
import 'animate.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
         path: "palvelut",
        element: <ServicesPage />
      }
    ]
  }
]);

ReactDOM
    .createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
    