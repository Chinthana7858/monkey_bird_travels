// context/BooleanContext.tsx
 "use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BooleanContextProps {
  booleanState: boolean;
  toggleBooleanState: () => void;
}

const BooleanContext = createContext<BooleanContextProps | undefined>(undefined);

const BooleanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [booleanState, setBooleanState] = useState<boolean>(false);

  const toggleBooleanState = () => setBooleanState(!booleanState);

  return (
    <BooleanContext.Provider value={{ booleanState, toggleBooleanState }}>
      {children}
    </BooleanContext.Provider>
  );
};

const useBooleanContext = (): BooleanContextProps => {
  const context = useContext(BooleanContext);
  if (context === undefined) {
    throw new Error('useBooleanContext must be used within a BooleanProvider');
  }
  return context;
};

export { BooleanProvider, useBooleanContext };
