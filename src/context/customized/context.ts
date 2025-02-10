import { createContext, useContext } from "react";

export interface CustomizedContextState {
  selectedIconId: number;
  setSelectedIconId: (id: number) => void;
  activeDir: "LTR" | "RTL";
  setActiveDir: (dir: "LTR" | "RTL") => void;
  activeMode: "LIGHT" | "DARK";
  setActiveMode: (mode: "LIGHT" | "DARK") => void;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  activeLayout: string;
  setActiveLayout: (layout: string) => void;
  isCardShadow: boolean;
  setIsCardShadow: (shadow: boolean) => void;
  isLayout: "BOXED" | "FULL";
  setIsLayout: (layout: "BOXED" | "FULL") => void;
  isBorderRadius: number;
  setIsBorderRadius: (radius: number) => void;
  isCollapse: string;
  setIsCollapse: (collapse: string) => void;
  isLanguage: string;
  setIsLanguage: (language: string) => void;
}

export const CustomizedContext = createContext<CustomizedContextState | undefined>(undefined);

export const useCustomizedContext = (): CustomizedContextState => {
  const context = useContext(CustomizedContext);
  if (!context) {
    throw new Error("useCustomizedContext must be used within CustomizedContextState");
  }
  return context;
};
