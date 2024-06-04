import { IconButton, TextField, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ContactCard from "./ContactCard";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
     
      <Grid container direction={"column"} spacing={2} xs={12}>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid container direction={"row"} spacing={3}>
              <Grid item>
                <IconButton
                  href="https://www.linkedin.com/in/patrick-vyn-badiang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://github.com/Patrick-Badiang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.instagram.com/patrick.vyn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          {isSmallScreen ? (
            <Grid item xs={12} direction={"row"}>
            
              <ContactCard />
            
          </Grid>

          ) : (
            <Grid container xs={12} direction={"row"}>
            <Grid item xs/>
            <Grid item xs >
              <ContactCard />
            </Grid>
            <Grid item xs />
          </Grid>
          )}
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
