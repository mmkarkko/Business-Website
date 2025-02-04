import "../styles.css";
import "./servicesPage.css";
import CollapsibleList from "../components/CollapsibleList";
import { Trans, useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { i18n } = useTranslation();

  return (
    <div className="servicesPage">
      <h2 id="services-header">
        <Trans i18nKey="services" key="i18n.language" />
      </h2>
      <div className="collapsible-container">
        <CollapsibleList />
      </div>
    </div>
  );
}