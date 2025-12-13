import React, { createContext, useContext, useEffect, useState } from 'react';

const FirstLoadContext = createContext();

export function FirstLoadProvider({ children }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Marcar que ya no es la primera carga después del montaje
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FirstLoadContext.Provider value={{ isFirstLoad }}>
      {children}
    </FirstLoadContext.Provider>
  );
}

export function useFirstLoad() {
  const context = useContext(FirstLoadContext);
  if (!context) {
    throw new Error('useFirstLoad debe ser usado dentro de FirstLoadProvider');
  }
  return context;
}
