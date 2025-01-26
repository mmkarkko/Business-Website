import "../styles.css";
import "./servicesPage.css";
import CollapsibleList from "../components/CollapsibleList";

export default function ServicesPage() {

  return (
    <div className="servicesPage">
      <h2 id="services-header">Services</h2>
      <div className="collapsible-container">
        <CollapsibleList />
      </div>
    </div>
  );
}