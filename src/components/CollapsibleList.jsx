import "./CollapsibleList.css";
//import Collapsible from 'react-collapsible';
import { ChevronDown, ChevronUp } from "react-feather";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CollapsibleList() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const listItems = t('listItems', { returnObjects: true });

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="collapsible-container">
      {listItems.map((item, index) => (
        <div
          key={index}
          className={`collapsible-item ${openIndex === index ? 'open' : ''}`}
        >
          <div
            onClick={() => toggleItem(index)}
            className="collapsible-header"
          >
            <span>{item.title}</span>
            {openIndex === index ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </div>
          <div 
            className={`collapsible-content ${openIndex === index ? 'open' : ''}`}
          >
            {openIndex === index && (
              <ul className="collapsible-list">
                {item.content.map((contentItem, idx) => (
                  <li key={idx} className="collapsible-list-item">{contentItem}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}