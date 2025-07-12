/**
 * Navigation is a sidebar, clicks to go to specific part of  page
 */

import { ThemeProvider } from "@emotion/react";
import "./App.css";
import {  Box, CssBaseline, Typography, createTheme } from "@mui/material";
import { themeOptions } from "./ThemeOptions.tsx";


import "resize-observer-polyfill/dist/ResizeObserver.global.js";
import AppHeader from "./Components/AppHeader.js";

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

        <AppHeader/>
        <Typography variant="h1" align="start" sx={{ margin: 4 }}>
          Patrick Vyn Badiang
        </Typography>
        <Box 
        component="img"
        src="pictures/release2.0/laptop.png"
        sx= {{
          objectFit: "contain",
        }}
        mt={3}
        width={"100%"} height={"600px"}
        >

        </Box>
    </ThemeProvider>
  );
}

export default App;
