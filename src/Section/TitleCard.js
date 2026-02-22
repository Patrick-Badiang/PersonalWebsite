import { Box, Card, CardActionArea, CardMedia, Fab, Paper, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CallMadeIcon from "@mui/icons-material/CallMade";

const TitleCard = ({ link, title, dev, image, frame }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      sx={{
        height: "40vh",
        backgroundColor: "#222222",
        borderRadius: "20px",
        mb: 2,
      }}
    >
      <CardActionArea component="a" target="_blank" rel="noopener" href={link}>
        {isSmallScreen ? (
          <Grid container direction="column" sx={{ ml: "10px" }} spacing={2}>
            <Grid xs={12}>
              <Grid container direction="column">
                <Grid xs />
                <Grid xs={5}>
                  <Typography variant="h2">
                    {title} <CallMadeIcon sx={{ fontSize: 10 }} />
                  </Typography>
                  <Typography variant="body1">{dev}</Typography>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    {frame.map((text, index) => (
                      <Fab
                        key={index}
                        disabled
                        variant="extended"
                        size="small"
                        color="primary"
                        sx={{
                          color: "#FFFFFF",
                          marginRight: "8px",
                          "&:hover": { backgroundColor: "#FFD3AB" },
                          "&.Mui-disabled": {
                            backgroundColor: "#FFD3AB",
                            color: "#3A3335",
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
            <Grid xs={7}>
              <Card
                sx={{
                  borderRadius: "10px",
                  maxWidth: "430px",
                  maxHeight: "242px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CardMedia component="img" image={image} alt={title} />
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" sx={{ ml: "10px" }} spacing={2}>
            <Grid xs={6}>
              <Card
                sx={{
                  borderRadius: "10px",
                  aspectRatio: "271/153",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CardMedia component="img" image={image} alt={title} />
              </Card>
            </Grid>
            <Grid xs={6}>
              <Grid container direction="column">
                <Grid xs />
                <Grid xs={5}>
                  <Typography variant="h2">
                    {title} <CallMadeIcon sx={{ fontSize: 10 }} />
                  </Typography>
                  <Typography variant="body1">{dev}</Typography>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    {frame.map((text, index) => (
                      <Fab
                        key={index}
                        disabled
                        variant="extended"
                        size="small"
                        color="primary"
                        sx={{
                          color: "#FFFFFF",
                          marginRight: "8px",
                          "&:hover": { backgroundColor: "#FFD3AB" },
                          "&.Mui-disabled": {
                            backgroundColor: "#FFD3AB",
                            color: "#3A3335",
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
        )}
      </CardActionArea>
    </Paper>
  );
};

export default TitleCard;
