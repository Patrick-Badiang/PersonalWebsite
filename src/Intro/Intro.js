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
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
// import Buttons from './Buttons';
import React from "react";

//The ".js" is  messing up the import
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn.js";
import FileDownloadIcon from "@mui/icons-material/FileDownload.js";

import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
import GitHubIcon from "@mui/icons-material/GitHub.js";
import InstagramIcon from "@mui/icons-material/Instagram.js";

import Pdf from "../Documents/Resume.pdf";

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
            {/* //Profile Pic */}
            <Grid item xs>
              <Box
                sx={{
                  borderRadius: "24px",
                  aspectRatio: "1/1",
                  width: "100%",
                  height: "100%",
                  position: "relative", // Make Box the positioning container
                }}
              >
                <img
                  src="pictures/ProfilePic.png"
                  alt="Profile Pic"
                  style={{
                    borderRadius: "20px",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            {/* //Name, Email, Location */}
            <Grid container direction={"column"} xs={7} spacing={0}>
              {/* //Name */}
              <Grid item xs={12}>
                <Typography variant="h5" textAlign={"start"}>
                  Patrick Vyn Badiang
                </Typography>
              </Grid>
              {/* //Email with Email Icon*/}

              <Grid container direction={"row"} xs={12} spacing = {0}>
                  <EmailIcon
                    sx={{
                      color: "#FFFFFF",
                      height: isSmall ? "8px" : "16px",
                    }}
                  />
                  <Typography textAlign={"start"} variant="body1">
                    patrick.vyn.llanto@gmail.com
                  </Typography>
                
              </Grid>
              </Grid>
              
          </Grid>
        </CardContent>
      </Card>
    </Box>  
  );
}

export default Intro;
