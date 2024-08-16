/**
 * Is title and has line underneath
 */

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


const NewSection = (props) => {
  

  

  return (
    <div  style = {{marginTop: '10px'}}>
      <Grid container direction={"row"} spacing={2} xs = {12}>
        <Grid item xs ={3}/>
        <Grid item xs = {1.5}>
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
      <Grid xs/>
      </Grid>
      

      {props.element}

      <Box sx={{ height: 50 }} />
    </div>
  );
};

export default NewSection;
