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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

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
                  src="pictures/ProfilePic.JPG"
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

              <Grid container direction={"row"} xs={12} spacing={0}>
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
              {/* //Description */}
              <Typography variant="body2" textAlign={"start"} color="#FFD3AB">
                Full Stack Engineer | Undergraduate Student
              </Typography>
              {/* //Icon Buttons */}
              <div style={{ marginTop: "15px" }}>
                <Grid container direction={"row"} justifyContent={"start"} spacing={3}>
                  <Grid item>
                    <IconButton
                      href="https://www.linkedin.com/in/patrick-vyn-badiang/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Example"
                      sx={{
                        height: isSmall ? "16px" : "32px",
                        aspectRatio: "1/1",
                      }}
                    >
                      <LinkedInIcon
                        sx={{
                          color: "#000000",
                          height: isSmall ? "16px" : "32px",
                          aspectRatio: "1/1",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton
                      href="https://www.instagram.com/patrick.vyn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Example"
                      sx={{
                        height: isSmall ? "16px" : "32px",
                        aspectRatio: "1/1",
                      }}
                    >
                      <InstagramIcon
                        sx={{
                          color: "#000000",
                          height: isSmall ? "16px" : "32px",
                          aspectRatio: "1/1",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton
                      href="https://github.com/Patrick-Badiang"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Example"
                      sx={{
                        height: isSmall ? "16px" : "32px",
                        aspectRatio: "1/1",
                      }}
                    >
                      <GitHubIcon
                        sx={{
                          color: "#000000",
                          height: isSmall ? "16px" : "32px",
                          aspectRatio: "1/1",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            {/* //Location */}
            <Grid container direction={"column"} xs alignContent={"end"}>
              <Grid container direction={"row"} xs={12}>
                <Grid xs={1}>
                  {/* //Conditionally render LocationOnIcon  size based  off of isSmall  const */}
                  <LocationOnIcon
                    sx={{
                      color: "#000000",
                      mt: "5px",
                      height: isSmall ? "8px" : "16px",
                      width: isSmall ? "8px" : "16px",
                    }}
                  />
                </Grid>
                <Grid xs>
                  <Typography
                    textAlign={"start"}
                    color="#C9FFC2"
                    sx={{ mt: "5px" }}
                    variant="body2"
                  >
                    Smyrna, DE
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs>
                <Button
                  variant="contained"
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 5, // Adjust the radius as needed
                    backgroundColor: "#D9D9D9",
                    "&:hover": {
                      backgroundColor: "#D9D9D9",
                    },
                    width: isSmall ? "80%" : "100%",
                  }}
                  startIcon={
                    <FileDownloadIcon
                      sx={{
                        color: "#000000",
                        height: isSmall ? "8px" : "32px",
                        aspectRatio: "1/1",
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="#000000"
                    sx={{ mr: "10px" }}
                  >
                    Resume
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Intro;
