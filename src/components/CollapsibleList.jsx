import "./CollapsibleList.css";
import Collapsible from 'react-collapsible';
import { ChevronDown, ChevronUp } from "react-feather";
import { useState } from "react";

export default function CollapsibleList() {
  //const items = ["Sähkö", "Mekaniikka", "Hydrauliikka", "Pneumatiikka", "Prosessiteollisuus", "Tuotantolaitteet", "Sähkönjakelujärjestelmät"];
  const [openIndex, setOpenIndex] = useState(null);

  const listItems = [
    {
      title: "Sähkö",
      content: [
        "Hätäpoistumistie-, turvavalotarkastukset, huollot",
        "Vanhat releohjaukset",
        "Logiikat",
        "Hätäseis-järjestelmät",
        "Ajastukset",
        "Askelmoottorit",
      ],
    },
    {
      title: "Mekaniikka",
      content: [
        "Linjaukset",
        "Laakeroinnit",
        "Pienet metallityöt",
      ],
    },
    {
      title: "Hydrauliikka",
      content: [
        "Hydrauliset linjat",
        "Pumppujen huolto",
        "Varaosat",
      ],
    },
    {
      title: "Pneumatiikka",
      content: [
        "Mittaukset",
        "Paineilmaohjaukset",
        "Paineilmalogiikat",
      ]
    }, 
    {
      title: "Prosessiteollisuus",
      content: [
        "Kappaletavara-automaatio",
        "Taajuusmuuttajat",
        "Vianhaku",
        "Korjaukset",
        "Huollot",
        "Säädöt",
        "Modernisoinnit",
      ]
    }, 
    {
      title: "Tuotantolaitteet",
      content: [
        "CNC-työstökoneet",
        "Robotit",
        "Magnetointilaitteet",
        "Uunit",
        "Ohjaukset",
        "Korjaukset",
        "vianhaku",
        "Huollot",
        "Säädöt",
        "Modernisoinnit",
      ]
    }
  ];

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
                {item.content.map((contentItem, index) => (
                  <li key={index} className="collapsible-list-item">{contentItem}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}