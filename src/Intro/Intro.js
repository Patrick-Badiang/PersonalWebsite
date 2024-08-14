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
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import Buttons from './Buttons';
import React from "react";

import EmailIcon from "@mui/icons-material/Email";

function Intro() {
  //Gif

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ mt: "20px" }}
    >
      <Card
        sx={{
          borderRadius: "30px",          //   height: "200px",
          width: "40%",
          aspectRatio: "16/4",
        }}
      >
        <CardContent>
          <Grid container direction={"row"}>
            <Grid xs={2}>
              <Box
                sx={{
                  borderRadius: "24px",
                  ml: "0px",
                  mr: "5px",
                  width: "100%",
                  height: "100%",
                  bgcolor: "primary.main",
                }}
              />
            </Grid>
            <Grid container direction={"column"}>
              {/* //Name */}
              <Typography variant="h5" textAlign={"center"}>
                Patrick Vyn Badiang
              </Typography>
              {/* //Email with Email Icon*/}
              <Grid container direction={"row"}>
                <EmailIcon sx = {{ml: '15px', mr: '5px'}}/>
                <Typography>patrick.vyn.llanto@gmail.com</Typography>


              </Grid>
              
            </Grid>
            <Grid xs>
              <Typography variant="h5" textAlign={"center"}>
                Smyrna, DE
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Intro;
