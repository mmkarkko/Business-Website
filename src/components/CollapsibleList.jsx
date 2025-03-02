import "./CollapsibleList.css";
import { ChevronDown, ChevronUp } from "react-feather";
import { useState, useId } from "react";
import { useTranslation } from "react-i18next";

export default function CollapsibleList() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const baseId = useId().replace(/:/g, "");

  const listItems = t('listItems', { returnObjects: true });

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="collapsible-container">
      {listItems.map((item, index) => {
        const headerId = `header-${baseId}-${index}`;
        const contentId = `content-${baseId}-${index}`;
        const isOpen = openIndex === index;
        
        return (
          <div
            key={index}
            className={`collapsible-item ${isOpen ? 'open' : ''}`}
          >
            <div
              id={headerId}
              onClick={() => toggleItem(index)}
              className="collapsible-header"
              role="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleItem(index);
                  e.preventDefault();
                }
              }}
            >
              <span>{item.title}</span>
              {isOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>
            <div 
              id={contentId}
              className={`collapsible-content ${isOpen ? 'open' : ''}`}
              aria-labelledby={headerId}
            >
              <div className="content-inner">
                <ul className="collapsible-list">
                  {item.content.map((contentItem, idx) => (
                    <li key={idx} className="collapsible-list-item">{contentItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
