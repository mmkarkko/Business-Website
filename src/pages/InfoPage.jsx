import "./InfoPage.css";
import "../styles.css";
import { Trans } from "react-i18next";

export default function InfoPage() {

  return (
    <div className="infoPage">
      <h2 id="info-header">
        <Trans i18nKey="about" key="i18n.language" />
      </h2>
      <div className="info-container">
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
    </div>
  );
}