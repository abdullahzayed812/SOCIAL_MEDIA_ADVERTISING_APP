import { Flowbite, ThemeModeScript } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { FullLayout } from "./layouts/FullLayout";

function App() {
  return (
    <>
      <ThemeModeScript />
      <Flowbite>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FullLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </>
  );
}

export default App;
