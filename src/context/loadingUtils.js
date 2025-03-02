// src/context/loadingUtils.js
import { createContext, useContext } from 'react';

export const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);
