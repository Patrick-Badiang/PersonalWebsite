/**
 *
 * Has Buttons, located in top center:
 *      Github, Email, LinkedIn
 *
 * Intro has:
 *      Profile Pic, Name
 *
 * Background:
 *      A rectangle
 */

import {
  Box,
  // Button,
  Card,
  CardContent,
  // IconButton,
  // Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
// import Buttons from './Buttons';
import React from "react";

// import EmailIcon from "@mui/icons-material/Email.js";
// import LocationOnIcon from "@mui/icons-material/LocationOn.js";
// import FileDownloadIcon from "@mui/icons-material/FileDownload.js";

// import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
// import GitHubIcon from "@mui/icons-material/GitHub.js";
// import InstagramIcon from "@mui/icons-material/Instagram.js";

// import Pdf from "../Documents/Resume.pdf";

function Intro() {
  //Checking if the  screen is small
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  //Gif

  return (
     <Box display="flex" justifyContent="center" sx={{ mt: "80px" }}>
      <Card
        sx={{
          borderRadius: "30px",
          width: isSmall ? "80%" : "50%",
        }}
      >
        <CardContent>
           <Grid xs={12} container direction={"row"} spacing={2}>
            <div><h2>Trying Grid</h2></div>
          </Grid> 
        </CardContent>
      </Card>
    </Box>  
  );
}

export default Intro;
