/**
 * Navigation is a sidebar, clicks to go to specific part of  page
 */

import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Intro from "./Intro/Intro.js";
import { CssBaseline, createTheme } from "@mui/material";
import { themeOptions } from "./ThemeOptions.tsx";
import NewSection from "./Section/NewSection.js";
import NewProject from "./Section/NewProject.js";


import "resize-observer-polyfill/dist/ResizeObserver.global.js";

function App() {
  // const handleScrollToSection = (sectionRef) => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   console.log("Scrolling to:", sectionRef);
  // };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

        <Intro />

      <div >
        <NewSection
          title="Projects"
          element={<NewProject />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
