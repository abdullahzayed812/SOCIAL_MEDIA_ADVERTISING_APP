import { ReactNode, useEffect, useState } from "react";
import { CustomizedContext, CustomizedContextState } from "./context";
import { CONTEXT_CONFIGS } from "../../configs/context";

interface CustomizedContextProps {
  children: ReactNode;
}

export const CustomizedContextProvider: React.FC<CustomizedContextProps> = ({ children }) => {
  const [customizedProps, setCustomizedProps] = useState<CustomizedContextState>({
    selectedIconId: 1,
    activeDir: CONTEXT_CONFIGS.activeDir,
    activeMode: CONTEXT_CONFIGS.activeMode,
    activeTheme: CONTEXT_CONFIGS.activeTheme,
    activeLayout: CONTEXT_CONFIGS.activeLayout,
    isCardShadow: CONTEXT_CONFIGS.isCardShadow,
    isLayout: CONTEXT_CONFIGS.isLayout,
    isBorderRadius: CONTEXT_CONFIGS.isBorderRadius,
    isCollapse: CONTEXT_CONFIGS.isCollapse,
    isLanguage: CONTEXT_CONFIGS.isLanguage,
    setSelectedIconId: (id: number) => setCustomizedProps((prevState) => ({ ...prevState, selectedIconId: id })),
    setActiveDir: (dir: "LTR" | "RTL") => setCustomizedProps((prevState) => ({ ...prevState, activeDir: dir })),
    setActiveMode: (mode: "LIGHT" | "DARK") => setCustomizedProps((prevState) => ({ ...prevState, activeMode: mode })),
    setActiveTheme: (theme: string) => setCustomizedProps((prevState) => ({ ...prevState, activeTheme: theme })),
    setActiveLayout: (layout: string) => setCustomizedProps((prevState) => ({ ...prevState, activeLayout: layout })),
    setIsCardShadow: (shadow: boolean) => setCustomizedProps((prevState) => ({ ...prevState, isCardShadow: shadow })),
    setIsLayout: (layout: "BOXED" | "FULL") => setCustomizedProps((prevState) => ({ ...prevState, isLayout: layout })),
    setIsBorderRadius: (radius: number) =>
      setCustomizedProps((prevState) => ({ ...prevState, isBorderRadius: radius })),
    setIsCollapse: (collapse: string) => setCustomizedProps((prevState) => ({ ...prevState, isCollapse: collapse })),
    setIsLanguage: (language: string) => setCustomizedProps((prevState) => ({ ...prevState, isLanguage: language })),
  });

  useEffect(() => {
    document.documentElement.setAttribute("class", customizedProps.activeMode);
    document.documentElement.setAttribute("dir", customizedProps.activeDir);
    document.documentElement.setAttribute("data-color-theme", customizedProps.activeTheme);
    document.documentElement.setAttribute("data-layout", customizedProps.activeLayout);
    document.documentElement.setAttribute("data-boxed-layout", customizedProps.isLayout);
    document.documentElement.setAttribute("data-sidebar-type", customizedProps.isCollapse);
  }, [customizedProps]);

  return <CustomizedContext.Provider value={customizedProps}>{children}</CustomizedContext.Provider>;
};
