import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DashboardContextProvider } from "./context/dashboard";
import { CustomizedContextProvider } from "./context/customized/index.tsx";
import Spinner from "./components/Spinner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardContextProvider>
      <CustomizedContextProvider>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </CustomizedContextProvider>
    </DashboardContextProvider>
    ,
  </StrictMode>
);
