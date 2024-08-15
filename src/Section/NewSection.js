/**
 * Is title and has line underneath
 */

import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const NewSection = (props) => {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "start",
    alignContent: "center",
  };

  const handleButtonClick = (sectionRef) => {
    props.onScrollToSection(sectionRef); // Call the passed-down function
  };

  return (
    <div id={props.ref} style = {{marginTop: '10px'}}>
      <Grid container direction={"row"} spacing={2} xs = {12}>
        <Grid item xs ={3}/>
        <Grid item xs>
      <Typography variant="h5" ml={2}>
        {props.title}
      </Typography>
      </Grid>
      </Grid>
      

      <div style={centerDivStyle}>
        <Grid container direction={"row"} spacing={2} xs = {12}>
        <Grid item xs ={3}/>
        <Grid item xs>
        <Box
          sx={{
            width: "10vw",
            height: 2,
            bgcolor: "#FFD3AB",
            mb: "30px",
          }}
        />
      </Grid>
      
        </Grid>
       
      </div>

      {props.element}

      <Box sx={{ height: 50 }} />
    </div>
  );
};

export default NewSection;
