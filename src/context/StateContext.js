import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        collapseMenu,
        setCollapseMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
