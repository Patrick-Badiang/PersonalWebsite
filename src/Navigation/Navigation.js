import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Icon from '@mui/icons-material/ExpandMore';

const Navigation = ({ onScrollToSection, ref1, ref2, ref3 }) => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  
  return (
    <>
    <div
      style={{
        position: "absolute",
        width: "100%",
        transform: "translateY(-50%)",
      }}
    >
      <Grid container xs={12} spacing={3}>
        <Grid xs />
        <Grid item xs={3}>
          <Card elevation={5} sx={{borderRadius: isSmallScreen ? "10px" : isMediumScreen ? "20px" : "50px" }} >
            <CardActionArea onClick={() => onScrollToSection(ref1)}>
              <CardMedia
                component="img"
                maxHeight="500"
                image="pictures/Aboutme.jpeg"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.0)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  About Me <Icon />
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs />
        <Grid item xs={3}>
          <Card elevation={5} sx={{ borderRadius: isSmallScreen ? "10px" : isMediumScreen ? "20px" : "50px"  }} 
          onClick={() => onScrollToSection(ref2)}>
            <CardActionArea >
              <CardMedia
                component="img"
                maxHeight="500"
                image="pictures/Projects.JPG"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.0)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  Projects<Icon />
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs />
        <Grid item xs={3}>
          <Card elevation={5} sx={{ borderRadius: isSmallScreen ? "10px" : isMediumScreen ? "20px" : "50px"  }}  
          onClick={() => onScrollToSection(ref3)}>
            <CardActionArea >
              <CardMedia
                component="img"
                maxHeight="500"
                image="pictures/Contact.JPG"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.0)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  Contact Me<Icon />
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs />
      </Grid>
    </div>
    <Box sx = {{height: isSmallScreen ? "100px" : isMediumScreen ? "200px" : "300px"}}/>
    </>
  );
}

export default Navigation;
