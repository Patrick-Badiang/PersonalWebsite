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
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import Buttons from './Buttons';
import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Intro() {
  //Gif

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: "80px" }}>
      <Card
        sx={{
          borderRadius: "30px", //   height: "200px",
          width: "50%",
          aspectRatio: "639/141",
        }}
      >
        <CardContent>
          <Grid xs={12} container direction={"row"} spacing={2}>
            {/* //Profile Pic */}
            <Grid item xs>
              <Box
                sx={{
                  borderRadius: "24px",
                  aspectRatio: "3/1",
                  width: "100%",
                  height: "100%",
                  position: "relative", // Make Box the positioning container
                }}
              >
                <img
                  src="pictures/ProfilePic.png"
                  alt="Image description"
                  style={{
                    borderRadius: "24px",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            {/* //Name, Email, Location */}
            <Grid container direction={"column"} xs={7} spacing={2}>
              {/* //Name */}
              <Typography variant="h5" textAlign={"start"}>
                Patrick Vyn Badiang
              </Typography>
              {/* //Email with Email Icon*/}
              <Grid container direction={"row"}>
                <EmailIcon sx={{ mr: "5px", mt: "3px", color: "white" }} />
                <Typography textAlign={"start"}>
                  patrick.vyn.llanto@gmail.com
                </Typography>
              </Grid>
              {/* //Description */}
              <Typography
                textAlign={"start"}
                sx={{ mt: "0px" }}
                color="#FFD3AB"
              >
                Full Stack Engineer | Undergraduate Student
              </Typography>
              {/* //Icon Buttons */}
              <div style={{ marginTop: "15px" }}>
                <Grid container direction={"row"} justifyContent={"start"}>
                  <IconButton aria-label="Example">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton aria-label="Example">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton aria-label="Example">
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              </div>
            </Grid>

            {/* //Location */}
            <Grid container direction={"column"} xs alignContent={"end"}>
              <Grid container direction={"row"} xs justifyContent={"end"}>
                <LocationOnIcon sx={{ color: "#000000", mt: "5px" }} />
                <Typography
                  textAlign={"center"}
                  color="#C9FFC2"
                  sx={{ mt: "5px" }}
                >
                  Smyrna, DE
                </Typography>
              </Grid>
              <Box sx={{ bgcolor: "#D9D9D9", borderRadius: "24px" }} >
                <Button startIcon={<FileDownloadIcon sx = {{color: "#000000", ml: "10px"}}/>}>
                  <Typography color = "#000000" sx ={{mr: "10px"}}>
                  Resume
                  </Typography>
                </Button>
                </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Intro;
