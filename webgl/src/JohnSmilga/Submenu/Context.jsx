import React from "react";
import { useContext } from "react";
import { useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpoen, setIsSidebarOpen] = useState(true);
  const [isSubmenu, setIsSubmenu] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setIsSubmenu(true);
  };
  const closeSubmenu = () => {
    setIsSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpoen,
        isSubmenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
