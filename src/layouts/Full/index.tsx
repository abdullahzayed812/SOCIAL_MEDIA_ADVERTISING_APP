import { Outlet } from "react-router";
import { useCustomizedContext } from "../../context/customized/context";
import { SidebarLayout } from "../Sidebar";

export const FullLayout: React.FC = () => {
  const { activeLayout, isLayout } = useCustomizedContext();

  return (
    <>
      <div className="flex w-full min-h-screen dark:bg-darkgray">
        <div className="page-wrapper flex w-full  ">
          {/* Header/sidebar */}

          {activeLayout == "VERTICAL" ? <SidebarLayout /> : null}
          <div className="page-wrapper-sub flex flex-col w-full dark:bg-darkgray">
            {/* Top Header  */}
            {activeLayout == "HORIZONTAL" ? <Header layoutType="horizontal" /> : <Header layoutType="vertical" />}

            <div
              className={`bg-lightgray dark:bg-dark  h-full ${
                activeLayout != "HORIZONTAL" ? "rounded-bb" : "rounded-none"
              } `}
            >
              {/* Body Content  */}
              <div
                className={` ${isLayout == "full" ? "w-full py-30 md:px-30 px-5" : "container mx-auto  py-30"} ${
                  activeLayout == "HORIZONTAL" ? "xl:mt-3" : ""
                }
              `}
              >
                <ScrollToTop>
                  <Outlet />
                </ScrollToTop>
              </div>
              <Customizer />
              <PartialTransitioning />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
