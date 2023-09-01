// SessionContext.js

import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({ selectedLanguage: 'en' });

  const updateSessionData = (newData) => {
    setSessionData({ ...sessionData, ...newData });
  };

  return (
    <SessionContext.Provider value={{ sessionData, updateSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};
