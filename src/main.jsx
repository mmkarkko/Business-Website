import ReactDOM from 'react-dom/client'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <AboutPage />
      }
      // Tähän voit lisätä muut reitit, esim:
      // {
      //   path: "about",
      //   element: <AboutPage />
      // }
    ]
  }
]);

ReactDOM
    .createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );