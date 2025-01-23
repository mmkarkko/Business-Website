import "./Footer.css";
import logo from "../assets/arkkoMatic-logo-shadow_text-as-path-optimized.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact-container">
        <img src={logo} id="footer-logo"></img>
        <p id="contact-name"></p>
      </div>
      <div className="maker-container">
      <p id="maker">Sivut toteutti <a href="https://www.miiaarkko.fi">Miia Arkko</a> 2025</p>
      </div>
    </div>
  );
}