import "../styles.css";
import "./ServicesPage.css";
import { Trans } from "react-i18next";
import { useEffect, Suspense } from "react";
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const CollapsibleList = React.lazy(() => import("../components/CollapsibleList"));

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicesPage">
      <h2 id="services-header">
        <Trans i18nKey="services" key="i18n.language" />
      </h2>

      <div className="services-intro">
        <p className="services-text">
          <Trans i18nKey="services-text" key="i18n.language" components={{ strong: <strong/>}} />
        </p>
      </div>
      
      <div className="collapsible-container">
        <Suspense fallback={<LoadingSpinner />}>
          <CollapsibleList />
        </Suspense>
      </div>
    </div>
  );
}
