// src/context/LoadingContext.jsx
import { createContext, useState } from 'react';
import { LoadingContext } from './loadingUtils';

export const LoadingProvider = ({ children }) => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  
  // Yhteinen lataustieto
  const isLoading = isLanguageLoading || isPageLoading;

  return (
    <LoadingContext.Provider value={{ 
      isLoading,
      isLanguageLoading, 
      setIsLanguageLoading,
      isPageLoading,
      setIsPageLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
