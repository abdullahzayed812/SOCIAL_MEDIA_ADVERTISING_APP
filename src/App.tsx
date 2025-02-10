import { Flowbite, ThemeModeScript } from "flowbite-react";
// import customTheme from "./utils/theme/custom-theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { FullLayout } from "./layouts/Full";

function App() {
  return (
    <>
      <ThemeModeScript />
      <Flowbite /*theme={{ theme: customTheme }}*/>
        <BrowserRouter>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FullLayout />}>
                <Route path="home" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BrowserRouter>
      </Flowbite>
    </>
  );
}

export default App;
