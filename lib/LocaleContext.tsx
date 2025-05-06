import React, { createContext, useState, useContext } from 'react';

// Create Context
//const LocaleContext = createContext(currentLocale'fr-FR');

const LocaleContext = createContext<{ curretLocale: String; } | undefined>(undefined);


// Provider Component
export const LocaleProvider = () => {
  const [locale, setLocale] = useState('en-US');
  
  const changeLocale = (newLocale) => setLocale(newLocale);

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      
    </LocaleContext.Provider>
  );
};

// Custom Hook for using the Locale Context
export const useLocale = () => useContext(LocaleContext);
