import "./HomePage.css";
import placeholder from "../assets/placeholder2.jpg";
import { Trans, useTranslation } from "react-i18next";

export default function HomePage() {
  const { i18n } = useTranslation();

  return (
      <div className="homePage">
        <img id="frontPageImage" src={placeholder} width={"100%"} />
        <div id="orangeBar">
          <h3 className="animate__animated animate__fadeInDown animate__delay-2s slogan">
            <Trans i18nKey="orange-bar" key="i18n.language" />
          </h3>
        </div>
        <div className="hero-container">
          <p className="hero-text">
            <Trans i18nKey="hero-text-upper" key="i18n.language" components={{ strong: <strong/>}} />
          </p>
          <p className="hero-text">
            <Trans i18nKey="hero-text-lower" key="i18n.language" components={{ strong: <strong/>}} />
          </p>
        </div>
      </div>
  );
}