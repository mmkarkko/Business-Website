import "../styles.css";
import "./servicesPage.css";
import CollapsibleList from "../components/CollapsibleList";
import { Trans, useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function ServicesPage() {
  const { i18n } = useTranslation();

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
        <CollapsibleList />
      </div>
    </div>
  );
}