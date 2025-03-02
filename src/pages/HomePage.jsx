import "./HomePage.css";
import placeholder from "../assets/placeholder2.jpg";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TbBolt, TbRobot, TbTools } from "react-icons/tb";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="homePage">
      <img id="frontPageImage" src={placeholder} alt="Arkkomatic - sähköautomaatio" />
      
      <div id="orangeBar">
        <h3 className="animate__animated animate__fadeInDown animate__delay-2s slogan">
          <Trans i18nKey="orange-bar" key="i18n.language" />
        </h3>
      </div>
      
      <div className="hero-container">
        <div className="hero-text hero-text-upper">
          <Trans i18nKey="hero-text-upper" key="i18n.language" components={{ strong: <strong />}} />
        </div>
        
        <p className="hero-text hero-text-lower">
          <Trans i18nKey="hero-text-lower" key="i18n.language" components={{ strong: <strong />}} />
        </p>
        
        <div className="services-highlight">
          <h2>{t("services")}</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <TbBolt />
              </div>
              <h3 className="service-title">{t("listItems.0.title")}</h3>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <TbRobot />
              </div>
              <h3 className="service-title">{t("listItems.5.title")}</h3>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <TbTools />
              </div>
              <h3 className="service-title">{t("listItems.4.title")}</h3>
            </div>
          </div>
          
          <Link to={`/${t("services").toLowerCase()}`} className="cta-button">
            {i18n.language === 'fi' ? <Trans i18nKey="see-services" key="i18n.language" /> : <Trans i18nKey="see-services" key="i18n.language" />}
          </Link>
        </div>
      </div>
    </div>
  );
}
