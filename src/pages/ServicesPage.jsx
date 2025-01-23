import "../styles.css";
import "./servicesPage.css";
import Collapsible from 'react-collapsible';

export default function ServicesPage() {
  return (
    <div className="servicesPage">
      <h2 id="services-header">Services</h2>
      <div className="collapsible-container">
        <Collapsible className="collapsible" trigger="Pöö">
        <p>Some text</p>
        </Collapsible>
        <Collapsible className="collapsible" trigger="Another Pöö!">
        <p>Some more text...</p>
        </Collapsible>
      </div>
    </div>
  );
}