import "./HomePage.css";
import placeholder from "../assets/placeholder2.jpg";

export default function HomePage() {
  return (
      <div className="homePage">
        <img id="frontPageImage" src={placeholder} width={"100%"} />
        <div id="orangeBar">
          <h3 className="animate__animated animate__fadeInDown animate__delay-2s slogan">Virtaa ja älyä, sopivassa suhteessa.</h3>
        </div>
        <div className="hero-container">
          <p id="heroText"></p>
        </div>
      </div>
  );
}