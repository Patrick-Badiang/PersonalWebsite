import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme, Box, Tabs, Tab, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState, useMemo } from "react";
import PortfolioApp from "./movedOver/PortfolioApp";
import { getLightTheme, getDarkTheme } from "./ThemeOptions";
import "resize-observer-polyfill/dist/ResizeObserver.global.js";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () => createTheme(darkMode ? getDarkTheme() : getLightTheme()),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, bgcolor: 'background.default', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
          <Tab label="Material UI View" />
          <Tab label="Portfolio View" />
        </Tabs>
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
        <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
