import "./Footer.css";
import logo from "../assets/arkkoMatic-logo-shadow_text-as-path-optimized.svg";
import { t } from "i18next";

export default function Footer() {
  const name="jussi.arkko";
  const domain="arkkomatic.com";
  const email = name+"@"+domain;

  const operator = "050";
  const number = "499 9072";
  const fullNumber = operator + " " + number;

  const MADomain = "https://www.miiaarkko.fi";

  return (
    <div className="footer">
      <div className="contact-container">
        <img src={logo} id="footer-logo"  alt="ArkkoMatic logo" ></img>
        <p id="contact-name"><strong>Jussi Arkko</strong></p>
        <p id="contact-email"><a href={`mailto:${email}`}>{email}</a></p>
        <p id="contact-phone"><a href={`tel:${fullNumber}`}>{fullNumber}</a></p>
        <p id="companyID">Y-tunnus: 1975726-5</p>
      </div>
      <div className="maker-container">
        <p id="maker">Copyright 2025 © <a href={MADomain} target="_blank">Miia Arkko</a></p>
        <p className="privacy-notice">{t("privacy-notice")}</p>
      </div>
    </div>
  );
}