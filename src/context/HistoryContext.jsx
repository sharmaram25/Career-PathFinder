import React, { createContext, useState, useContext, useEffect } from 'react';

export const HistoryContext = createContext();

export const useHistoryContext = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  
  // Load history from session storage on initial render
  useEffect(() => {
    const savedHistory = sessionStorage.getItem('pathfinderHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);
  
  // Save history to session storage when it changes
  useEffect(() => {
    sessionStorage.setItem('pathfinderHistory', JSON.stringify(history));
  }, [history]);
  
  const addToHistory = (career) => {
    const timestamp = new Date().toISOString();
    
    // Don't add duplicates, move to top if exists
    setHistory(prev => {
      const filtered = prev.filter(item => item.id !== career.id);
      return [{ ...career, viewedAt: timestamp }, ...filtered.slice(0, 49)]; // Keep only 50 items
    });
  };
  
  const clearHistory = () => {
    setHistory([]);
    sessionStorage.removeItem('pathfinderHistory');
  };
  
  const removeFromHistory = (careerId) => {
    setHistory(prev => prev.filter(item => item.id !== careerId));
  };
  
  return (
    <HistoryContext.Provider value={{
      history,
      addToHistory,
      clearHistory,
      removeFromHistory
    }}>
      {children}
    </HistoryContext.Provider>
  );
};
