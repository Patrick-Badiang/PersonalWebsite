import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Fab,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import CallMadeIcon from "@mui/icons-material/CallMade.js";

const TitleCard = (props) => {
  const frame = props.frame;

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          height: "40vh",
          backgroundColor: "#4E684D",
          borderRadius: "20px",
        }}
      >
        <CardActionArea
          component="a"
          target="_blank"
          rel="noopener"
          href={props.link}
        >
          {
            isSmallScreen ? (
              <Grid
            container
            xs={12}
            direction={"column"}
            sx={{ ml: "10px" }}
            spacing={2}
          >
            
            <Grid item xs={12}>
              <Grid container direction={"column"} xs>
                <Grid item xs />
                <Grid item xs={5}>
                  <Typography variant="h2">
                    {props.title} <CallMadeIcon sx = {{fontSize: 10}}/>
                  </Typography>
                  <Typography variant="body1">{props.dev}</Typography>        
                  <Box display="flex" flexDirection="row" alignItems="center">
                    {frame.map((text, index) => (
                      <Fab
                        key={index}
                        disabled
                        variant="extended"
                        size="small"
                        color="primary"
                        sx={{
                          color: "#FFFFFF", // Your desired text color
                          marginRight: "8px", // Add some spacing between FABs
                          "&:hover": {
                            backgroundColor: "#FFD3AB", // Ensures hover color is the same
                          },
                          "&.Mui-disabled": {
                            backgroundColor: "#FFD3AB", // Keeps the same background color when disabled
                            color: "#3A3335", // Keeps the same text color when disabled
                          },
                        }}
                      >
                        {text}
                      </Fab>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Card
                sx={{
                  borderRadius: "10px",
                  maxWidth: "430px",
                  maxHeight: "242px",
                  backgroundColor: props.color,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CardMedia component="img" image={props.image} />
              </Card>
            </Grid>
          </Grid>
            ): (
              <Grid
            container
            xs={12}
            direction={"row"}
            sx={{ ml: "10px" }}
            spacing={2}
          >
            <Grid item xs={6}>
              <Card
                sx={{
                  borderRadius: "10px",
                  aspectRatio: "271/153",
                  backgroundColor: props.color,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CardMedia component="img" image={props.image} />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction={"column"} xs>
                <Grid item xs />
                <Grid item xs={5}>
                  <Typography variant="h2">
                    {props.title} <CallMadeIcon sx = {{fontSize: 10}}/>
                  </Typography>
                  <Typography variant="body1">{props.dev}</Typography>        
                  <Box display="flex" flexDirection="row" alignItems="center">
                    {frame.map((text, index) => (
                      <Fab
                        key={index}
                        disabled
                        variant="extended"
                        size="small"
                        color="primary"
                        sx={{
                          color: "#FFFFFF", // Your desired text color
                          marginRight: "8px", // Add some spacing between FABs
                          "&:hover": {
                            backgroundColor: "#FFD3AB", // Ensures hover color is the same
                          },
                          "&.Mui-disabled": {
                            backgroundColor: "#FFD3AB", // Keeps the same background color when disabled
                            color: "#3A3335", // Keeps the same text color when disabled
                          },
                        }}
                      >
                        {text}
                      </Fab>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

            )
          }
          
        </CardActionArea>
      </Paper>
    </>
  );
};

export default TitleCard;
