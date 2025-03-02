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
  
  // Track URL changes and initiate loading
  useEffect(() => {
    setIsPageLoading(true);
    setIsTransitioning(true);
    
    // Loading ends when components are ready
    // This is executed in the next render cycle
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

  // Show loading animation only if language is loading or page is in slow transition
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
