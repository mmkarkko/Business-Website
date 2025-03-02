import "./InfoPage.css";
import "../styles.css";
import { Trans, useTranslation } from "react-i18next";

export default function InfoPage() {
  const { i18n } = useTranslation();

  return (
    <div className="infoPage">
      <h2 id="info-header">
        <Trans i18nKey="about" key="i18n.language" />
      </h2>
      <div className="info-left">
        <p className="info-text">
          <Trans i18nKey="about-text-upper" key="i18n.language" components={{ strong: <strong/>}} />
        </p>
        <p className="info-text">
          <Trans i18nKey="about-text-middle" key="i18n.language" components={{ strong: <strong/>}} />
        </p>
        <p className="info-text">
          <Trans i18nKey="about-text-lower" key="i18n.language" components={{ strong: <strong/>}} />
        </p>
        </div>
      <div className="info-right">
        
        </div>

    </div>
  );
}