import { useState, ReactNode } from "react";
import React from "react";
import { DashboardContext } from "./context";

interface DashboardContextProps {
  children: ReactNode;
}

export const DashboardContextProvider: React.FC<DashboardContextProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  return (
    <DashboardContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
