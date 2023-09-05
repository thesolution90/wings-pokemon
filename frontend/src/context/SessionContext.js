// Hier werden die Daten gespeichert die persistent während einer
// Session gehalten werden

// Das ist die gewählte Sprache, der gefilterte PokeType oder ein Suchstring

import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

// Erzeugen eines neuen Kontextes
export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  // Hier sind die Kontext Variablen definitert
  const [sessionData, setSessionData] = useState({ selectedLanguage: 'en', selectedType: '', searchString: '' });

  const updateSessionData = (newData) => {
    // Hinzufügen der neuen Daten ohne das Original zu beschädigen
    setSessionData({ ...sessionData, ...newData });
  };

  return (
    <SessionContext.Provider value={{ sessionData, updateSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};
