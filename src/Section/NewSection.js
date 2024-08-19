/**
 * Is title and has line underneath
 */

import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";


const NewSection = (props) => {
  
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('md'));
  

  return (
    <div  style = {{marginTop: '10px'}}>
      {isSmall ? (
        <Grid container direction={"row"} spacing={2} xs={12}>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Typography variant="h5" ml={2}>
              {props.title}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 2,
                bgcolor: "#FFD3AB",
                mb: "30px",
              }}
            />
          </Grid>
          <Grid xs />
        </Grid>
      ) : (
        <Grid container direction={"row"} spacing={2} xs={12}>
          <Grid item xs={3} />
          <Grid item xs={1.5}>
            <Typography variant="h5" ml={2}>
              {props.title}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 2,
                bgcolor: "#FFD3AB",
                mb: "30px",
              }}
            />
          </Grid>
          <Grid xs />
        </Grid>
      )}

      {props.element}

      <Box sx={{ height: 50 }} />
    </div>
  );
};

export default NewSection;
