/**
 * Navigation is a sidebar, clicks to go to specific part of  page
 */

import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Intro from "./Intro/Intro";
import { Box, CssBaseline, TextField, createTheme, useMediaQuery } from "@mui/material";
import { themeOptions } from "./ThemeOptions.tsx";
import NewSection from "./Section/NewSection.js";
import Navigation from "./Navigation/Navigation.js";
import AboutMe from "./DifferentSections/AboutMe.js";
import NewProject from "./Section/NewProject.js";
import Contact from "./Section/Contact.js";
import { useRef } from "react";

import 'resize-observer-polyfill/dist/ResizeObserver.global';


function App() {
  const topRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const handleScrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Scrolling to:", sectionRef);
  };

  const theme = createTheme(themeOptions);
  


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div ref={topRef}>
        <Intro />
      </div>

      {/* <Navigation
        onScrollToSection={handleScrollToSection} // Pass scroll function as a prop
        ref1={sectionRef1}
        ref2={sectionRef2}
        ref3={sectionRef3}
      /> */}

<div ref={sectionRef2}>
        <NewSection
          title="Projects"
          element={<NewProject />}
          onScrollToSection={handleScrollToSection}
          top={topRef}
        />
      </div>

      
      <div ref={sectionRef1}>
        
      </div>

      
      
      <div ref={sectionRef3}>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
