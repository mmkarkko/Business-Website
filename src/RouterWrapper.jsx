import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ErrorPage from './pages/ErrorPage';
import InfoPage from './pages/InfoPage';
import App from './App';

const RouterWrapper = () => {
  const { t } = useTranslation();
  
  const router = React.useMemo(() => {
    // Määritellään reitit molemmille kielille
    const routes = {
      services: t("services").toLowerCase(),
      about: t("about").toLowerCase()
    };

    return createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: routes.services,
            element: <ServicesPage />
          },
          {
            path: routes.about,
            element: <InfoPage />
          },
          // Lisätään uudelleenohjaukset vanhoille reiteille
          {
            path: "services",
            element: <Navigate to={`/${routes.services}`} replace />
          },
          {
            path: "about",
            element: <Navigate to={`/${routes.about}`} replace />
          },
          {
            path: "palvelut",
            element: <Navigate to={`/${routes.services}`} replace />
          },
          {
            path: "tietoja",
            element: <Navigate to={`/${routes.about}`} replace />
          }
        ]
      }
    ]);
  }, [t]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default RouterWrapper;