import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fi: {
        translation: {
          "home": "Etusivu",
          "services": "Palvelut",
          "about": "Tietoja",
          "orange-bar": "Virtaa ja älyä, sopivassa suhteessa.",
          "hero-text-upper": "<strong>Sähköautomaatio- ja kunnossapitopalvelut tuotantolaitteiden ja prosessiteollisuuden parissa<br /> – yli 15 vuoden kokemuksella.</strong>",
          "hero-text-lower": "<strong>Arkkomatic</strong> tarjoaa asiantuntevaa ja luotettavia sähkö- ja automaatioratkaisuja, jotka parantavat teollisuusprosessien sujuvuutta. Oli sitten kyseessä uusien järjestelmien suunnittelu, käyttöönotto tai vianetsintä, olen täällä auttamassa.",
          "about-text-upper": "<strong>Arkkomatic</strong> on Laukaasta käsin toimiva yritys, joka tarjoaa asiantuntevaa osaamista teollisuussähkön, automaation ja robotiikan parissa. <strong>Arkkomaticin</strong> toimintaa hoitaa kokenut sähkö- ja automaatioalan ammattilainen, jolla on yli 15 vuoden kokemus teollisuuden sähköasennuksista, automaatiojärjestelmistä ja robotiikasta.",
          "about-text-middle": "<strong>Arkkomatic</strong> toteuttaa ratkaisuja, jotka parantavat tuotannon sujuvuutta ja luotettavuutta – oli kyseessä uuden järjestelmän suunnittelu ja käyttöönotto, olemassa olevan optimointi tai vianetsintä ja huolto. Jokainen projekti toteutetaan asiakkaan tarpeiden mukaan, joustavasti ja tehokkaasti.",
          "about-text-lower": "Luotettavuus ja laadukas työnjälki ovat minulle ensiarvoisen tärkeitä. Jos etsit sähkö- ja automaatioalan asiantuntijaa, joka ymmärtää teollisuuden tarpeet, <strong>Arkkomatic</strong> on oikea valinta.",
          "see-services": "Katso kaikki palvelut",
          "services-text": "<strong>Arkkomatic</strong> tarjoaa monipuolisia sähkö- ja automaatiopalveluita teollisuuden tarpeisiin. Pitkällä kokemuksellani ja ammattitaidollani varmistan tuotantolaitteistojenne luotettavan toiminnan. <strong>Arkkomaticin</strong> palvelut kattavat kaiken suunnittelusta ja asennuksesta huoltoon ja vianetsintään.",
          "error-page-404-title": "Sivua ei löydy",
          "error-page-generic-title": "Hups, jokin meni pieleen",
          "error-page-url": "Osoitteessa",
          "error-page-notFound": "Hakemaasi sivua ei löydy tai se on siirretty.",
          "error-page-unknown": "Tuntematon virhe tapahtui.",
          "error-page-back": "Takaisin etusivulle",
          "privacy-notice": "Tämä sivusto käyttää selaimen muistia vain kielivalinnan tallentamiseen.",

          // Finnish translations for the services list
          "listItems": [
            {
              "title": "Sähkö",
              "content": [
                "Hätäpoistumistie-, turvavalotarkastukset, huollot",
                "Vanhat releohjaukset",
                "Logiikat",
                "Hätäseis-järjestelmät",
                "Ajastukset",
                "Askelmoottorit",
              ]
            },
            {
              "title": "Mekaniikka",
              "content": [
                "Linjaukset",
                "Laakeroinnit",
                "Pienet metallityöt",
              ]
            },
            {
              "title": "Hydrauliikka",
              "content": [
                "Painesäädöt",
                "Painemittaukset",
                "Hydrauliikkakaaviot",
              ]
            },
            {
              "title": "Pneumatiikka",
              "content": [
                "Mittaukset",
                "Paineilmaohjaukset",
                "Paineilmalogiikat",
              ]
            },
            {
              "title": "Prosessiteollisuus",
              "content": [
                "Prosessiautomaatio",
                "Taajuusmuuttajat",
                "Vianhaku",
                "Korjaukset",
                "Huollot",
                "Säädöt",
                "Modernisoinnit",
              ]
            },
            {
              "title": "Tuotantolaitteet",
              "content": [
                "CNC-työstökoneet",
                "Robotit",
                "Magnetointilaitteet",
                "Uunit",
                "Ohjaukset",
                "Korjaukset",
                "Vianhaku",
                "Huollot",
                "Säädöt",
                "Modernisoinnit",
              ]
            },
            {
              "title": "Sähkönjakelujärjestelmät",
              "content": [
                "Sähköasennukset",
                "Sähköasennustarkastukset",
                "Akustojen testaukset, huollot",
                "Sähkölaitteiston kuntokartoitukset",
              ]
            }
          ]
        }
      },
      en: {
        translation: {
          "home": "Home",
          "services": "Services",
          "about": "About",
          "orange-bar": "Power and intelligence, in the perfect balance.",
          "hero-text-upper": "<strong>Electrical automation and maintenance services for production equipment and process industry<br /> – with over 15 years of experience.</strong>",
          "hero-text-lower": "<strong>Arkkomatic</strong> offers expert and reliable electrical and automation solutions that improve the efficiency of industrial processes. Whether it's designing new systems, implementation, or troubleshooting, I am here to help.",
          "about-text-upper": "<strong>Arkkomatic</strong> is a sole proprietorship based in Laukaa in central Finland, offering expert knowledge in industrial electricity, automation, and robotics. <strong>Arkkomatic</strong> is operated by an experienced professional in the electrical and automation field, with over 15 years of experience in industrial electrical installations, automation systems, and robotics.",
          "about-text-middle": "<strong>Arkkomatic</strong> implements solutions that improve the smoothness and reliability of production – whether it's designing and implementing a new system, optimizing an existing one, or troubleshooting and maintenance. Each project is carried out according to the client's needs, flexibly and efficiently.",
          "about-text-lower": "Reliability and high-quality workmanship are of utmost importance to me. If you're looking for an expert in electrical and automation fields who understands the needs of the industry, <strong>Arkkomatic</strong> is the right choice.",
          "see-services": "See all services",
          "services-text": "<strong>Arkkomatic</strong> offers comprehensive electrical and automation services for industrial needs. The professional expertise and extensive experience of <strong>Arkkomatic</strong> ensure reliable operation of your production equipment. <strong>Arkkomatic</strong> services cover everything from design and installation to maintenance and troubleshooting.",
          "error-page-404-title": "Page Not Found",
          "error-page-generic-title": "Oops, Something Went Wrong",
          "error-page-url": "At",
          "error-page-notFound": "The page you were looking for doesn't exist or has been moved.",
          "error-page-unknown": "An unknown error occurred.",
          "error-page-back": "Back to Home",
          "privacy-notice": "This website only uses browser storage to save your language preference.",

          // English translations for the list
          "listItems": [
            {
              "title": "Electrical",
              "content": [
                "Emergency exit and emergency light checks, maintenance",
                "Old relay controls",
                "Logics",
                "Emergency stop systems",
                "Timers",
                "Step motors",
              ]
            },
            {
              "title": "Mechanics",
              "content": [
                "Alignments",
                "Bearings",
                "Small metal works",
              ]
            },
            {
              "title": "Hydraulics",
              "content": [
                "Pressure controls",
                "Pressure measurements",
                "Hydraulic diagrams",
              ]
            },
            {
              "title": "Pneumatics",
              "content": [
                "Comressed air controls",
                "Pneumatic measurements",
                "Compressed air logics",
              ]
            },
            {
              "title": "Process industry",
              "content": [
                "Process automation",
                "Frequency converters",
                "Troubleshooting",
                "Repairs",
                "Maintenance",
                "Adjustments",
                "Modernizations",
              ]
            },
            {
              "title": "Production equipment",
              "content": [
                "CNC machine tools",
                "Robots",
                "Magnetizing devices",
                "Furnaces",
                "Controls",
                "Repairs",
                "Troubleshooting",
                "Maintenance",
                "Adjustments",
                "Modernizations",
              ]
            },
            {
              "title": "Electrical distribution systems",
              "content": [
                "Electrical installations",
                "Electrical inspection",
                "Battery testing, maintenance",
                "Condition survey of electrical equipment",
              ]
            }
          ]
        }
      }
    },
    lng: localStorage.getItem('i18nextLng') || 'fi',
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
