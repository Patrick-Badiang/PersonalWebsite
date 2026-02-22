import { Box, Card, CardContent, IconButton, Typography, useMediaQuery, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Pdf from "../Documents/Resume.pdf";

function Intro() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: isSmall ? "10px" : "80px" }}>
      <Card sx={{ borderRadius: "30px", width: isSmall ? "95%" : "50%" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12} sm={5}>
              <Box
                sx={{
                  borderRadius: "24px",
                  aspectRatio: "1/1",
                  width: "100%",
                  position: "relative",
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
            <Grid xs={12} sm={7}>
              <Grid container direction="column" spacing={0}>
                <Grid xs={12}>
                  <Typography variant="h5" textAlign="start">
                    Patrick Vyn Badiang
                  </Typography>
                </Grid>
                <Grid container direction="row" xs={12} spacing={0}>
                  <EmailIcon sx={{ color: "#FFFFFF", height: "16px" }} />
                  <Typography textAlign="start" variant="body1">
                    patrick.vyn.llanto@gmail.com
                  </Typography>
                </Grid>
                <Typography variant="body2" textAlign="start" color="#FFD3AB">
                  Software Developer | Undergraduate Student
                </Typography>
                <Box mt="15px">
                  <Grid container direction="row" justifyContent="start" spacing={1}>
                    <Grid>
                      <IconButton
                        href="https://www.linkedin.com/in/patrick-vyn-badiang/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        sx={{ height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }}
                      >
                        <LinkedInIcon sx={{ color: "#000000", height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }} />
                      </IconButton>
                    </Grid>
                    <Grid>
                      <IconButton
                        href="https://www.instagram.com/patrick.vyn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        sx={{ height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }}
                      >
                        <InstagramIcon sx={{ color: "#000000", height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }} />
                      </IconButton>
                    </Grid>
                    <Grid>
                      <IconButton
                        href="https://github.com/Patrick-Badiang"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        sx={{ height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }}
                      >
                        <GitHubIcon sx={{ color: "#000000", height: isSmall ? "16px" : "32px", aspectRatio: "1/1" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid xs={12} container direction="column" alignContent="end">
              <Grid container direction="row" xs={12}>
                <Grid xs={1}>
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
                  <Typography textAlign="start" color="#C9FFC2" sx={{ mt: "5px" }} variant="body2">
                    Smyrna, DE
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs>
                <Button
                  variant="contained"
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 5,
                    backgroundColor: "#D9D9D9",
                    "&:hover": { backgroundColor: "#C0C0C0" },
                    width: "100%",
                  }}
                  startIcon={
                    <FileDownloadIcon
                      sx={{
                        color: "#000000",
                        height: isSmall ? "16px" : "32px",
                        aspectRatio: "1/1",
                        ml: isSmall ? "10px" : "10px",
                      }}
                    />
                  }
                >
                  <Typography variant="body2" color="#000000" sx={{ mr: "10px" }}>
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
