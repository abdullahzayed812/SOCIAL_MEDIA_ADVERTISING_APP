import { createContext, useContext } from "react";

interface DashboardContextState {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (isOpen: boolean) => void;
}

export const DashboardContext = createContext<DashboardContextState | undefined>(undefined);

export const useDashboardContext = (): DashboardContextState => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboardContext must be used within a DashboardContextState");
  }
  return context;
};
