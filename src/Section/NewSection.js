import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const NewSection = ({ title, element }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box mt="10px">
      {isSmall ? (
        <>
          <Typography variant="h5" sx={{ ml: "15px" }}>
            {title}
          </Typography>
          <Box sx={{ width: "15%", height: 2, bgcolor: "#FFD3AB", mb: "15px", ml: "15px" }} />
        </>
      ) : (
        <Grid container spacing={2}>
          <Grid xs={3} />
          <Grid xs={1.5}>
            <Typography variant="h5" ml={2}>
              {title}
            </Typography>
            <Box sx={{ width: "100%", height: 2, bgcolor: "#FFD3AB", mb: "30px" }} />
          </Grid>
          <Grid xs />
        </Grid>
      )}
      {element}
    </Box>
  );
};

export default NewSection;
