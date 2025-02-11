import { Icon } from "@iconify/react";
import Notifications from "./Notifications";
import Profile from "./Profile";

import { Navbar } from "flowbite-react";
import AppLinks from "./AppLinks";

import { Language } from "./Language";
import { useCustomizedContext } from "../../context/customized/context";

export const MobileHeaderItems = () => {
  const { activeMode, setActiveMode } = useCustomizedContext();

  const toggleMode = () => {
    setActiveMode(activeMode === "LIGHT" ? "DARK" : "LIGHT");
  };
  return (
    <Navbar fluid className="rounded-none bg-white dark:bg-darkgray flex-1 px-9 ">
      {/* Toggle Icon   */}

      <div className="xl:hidden block w-full">
        <div className="flex gap-3 justify-center items-center">
          {/* Light Mode Button */}
          {activeMode === "LIGHT" ? (
            <div
              className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-darkminisidebar  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink  dark:text-white"
              onClick={toggleMode}
            >
              <span className="flex items-center">
                <Icon icon="solar:moon-line-duotone" width="20" />
              </span>
            </div>
          ) : (
            // Dark Mode Button
            <div
              className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-darkminisidebar  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink  dark:text-white"
              onClick={toggleMode}
            >
              <span className="flex items-center">
                <Icon icon="solar:sun-bold-duotone" width="20" />
              </span>
            </div>
          )}

          {/* Notification Dropdown */}
          <Notifications />

          {/* App Link Dropwown   */}
          <AppLinks />

          {/* Language Dropdown*/}
          <Language />
          {/* Profile Dropdown */}
          <Profile />
        </div>
      </div>
    </Navbar>
  );
};
