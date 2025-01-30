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
          <p className="hero-text"><strong>Sähköautomaatio- ja kunnossapitopalvelut tuotantolaitteiden ja prosessiteollisuuden parissa<br /> – yli 15 vuoden kokemuksella.</strong></p>
          <p className="hero-text"><strong>Arkkomatic</strong> tarjoaa asiantuntevaa ja luotettavaa sähkö- ja automaatioratkaisua, jotka parantavat teollisuusprosessien sujuvuutta. Oli kyseessä uusien järjestelmien suunnittelu, käyttöönotto tai vianetsintä, olen täällä auttamassa.</p>
        </div>
      </div>
  );
}