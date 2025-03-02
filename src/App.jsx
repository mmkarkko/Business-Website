// src/App.jsx
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet, useLocation } from "react-router-dom";
import "./localization/i18n";
import { LoadingProvider } from './context/LoadingContext';
import { useLoading } from './context/loadingUtils';
import LoadingSpinner from './components/LoadingSpinner';
import { useEffect, useState } from 'react';

const AppContent = () => {
  const { isLoading, isLanguageLoading, setIsPageLoading } = useLoading();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Seuraa URL:n muutoksia ja käynnistää latauksen
  useEffect(() => {
    setIsPageLoading(true);
    setIsTransitioning(true);
    
    // Lataus loppuu, kun komponentit ovat valmiita
    // Tämä suoritetaan seuraavassa render-syklissä
    const timeout = requestAnimationFrame(() => {
      setIsPageLoading(false);
      setIsTransitioning(false);
    });
    
    return () => {
      cancelAnimationFrame(timeout);
      setIsPageLoading(false);
      setIsTransitioning(false);
    };
  }, [location.pathname, setIsPageLoading]);

  // Näytetään latausanimaatio vain, jos kieli latautuu tai sivu on hitaassa siirtymässä
  const shouldShowLoading = isLanguageLoading || (isTransitioning && isLoading);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
      {shouldShowLoading && (
        <div className="global-loading-overlay">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </div>
  );
}

export default App;
