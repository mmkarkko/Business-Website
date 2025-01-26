import "./CollapsibleList.css";
import Collapsible from 'react-collapsible';
import { ChevronDown, ChevronUp } from "react-feather";
import { useState } from "react";

export default function CollapsibleList() {
  const items = ["Sähkö", "Mekaniikka", "Hydrauliikka", "Pneumatiikka", "Prosessiteollisuus", "Tuotantolaitteet", "Sähkönjakelujärjestelmät"];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="collapsible-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`collapsible-item ${openIndex === index ? 'open' : ''}`}
        >
          <div
            onClick={() => toggleItem(index)}
            className="collapsible-header"
          >
            <span>{item}</span>
            {openIndex === index ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </div>
          <div 
            className={`collapsible-content ${openIndex === index ? 'open' : ''}`}
          >
            <div className="content-inner">
              {openIndex === index && <p>Tämä on {item.toLowerCase()} sisältö.</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}