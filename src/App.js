/**
 * Navigation is a sidebar, clicks to go to specific part of  page
 */

import { ThemeProvider } from '@emotion/react';
import './App.css';
import Intro from './Intro/Intro';
import { Box, CssBaseline, createTheme } from '@mui/material';
import { themeOptions } from './ThemeOptions.tsx';
import NewSection from './Section/NewSection.js';
import Navigation from './Navigation/Navigation.js';
import AboutMe from './DifferentSections/AboutMe.js';
import NewProject from './Section/NewProject.js';
import Contact from './Section/Contact.js';


function App() {
  
  const  theme = createTheme(themeOptions);
return (
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
        <Intro/>
        <Navigation/>
        <Box sx = {{height: 400}}/>
        <NewSection title = "About Me" element = {<AboutMe/>}/>

        <NewSection title = "Projects" element = {<NewProject/>}/>

        <NewSection title = "Contact Me" element = {<Contact/>}/>
    </ThemeProvider>
      

    
  );
}

export default App;
