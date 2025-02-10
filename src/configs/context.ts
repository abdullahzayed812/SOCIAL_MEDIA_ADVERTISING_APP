export interface ConfigsType {
  activeDir: "LTR" | "RTL";
  activeMode: "LIGHT" | "DARK";
  activeTheme: "BLUE_THEME" | "GREEN_THEME" | "AQUA_THEME" | "PURPLE_THEME" | "ORANGE_THEME";
  activeLayout: "VERTICAL" | "HORIZONTAL";
  isLayout: "BOXED" | "FULL";
  isSidebarHover: boolean;
  isCollapse: "FULL_SIDEBAR";
  isLanguage: "EN";
  isCardShadow: boolean;
  isMobileSidebar: boolean;
  isHorizontal: boolean;
  isBorderRadius: number;
  sidebarWidth: number;
  miniSidebarWidth: number;
  topBarHeight: number;
}

export const CONTEXT_CONFIGS: ConfigsType = {
  activeDir: "LTR", // This can be ltr or rtl
  activeMode: "LIGHT", // This can be light or dark
  activeTheme: "BLUE_THEME", // BLUE_THEME, GREEN_THEME, AQUA_THEME, PURPLE_THEME, ORANGE_THEME
  activeLayout: "VERTICAL", // This can be vertical or horizontal
  isLayout: "BOXED", // This can be full or boxed
  isSidebarHover: false,
  isCollapse: "FULL_SIDEBAR",
  isLanguage: "EN",
  isCardShadow: true,
  isMobileSidebar: false,
  isHorizontal: false,
  isBorderRadius: 12,
  sidebarWidth: 320,
  miniSidebarWidth: 87,
  topBarHeight: 70,
};
