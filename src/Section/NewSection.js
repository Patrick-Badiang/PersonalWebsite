/**
 * Is title and has line underneath
 */

import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const NewSection = (props) => {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  };

  const handleButtonClick = (sectionRef) => {
    props.onScrollToSection(sectionRef); // Call the passed-down function
  };

  return (
    <div id={props.ref}>
      <Typography variant="h3" style={centerDivStyle}>
        {props.title}

        <IconButton onClick={() => handleButtonClick(props.top)}>
          <ArrowDropUpIcon />
        </IconButton>
      </Typography>

      <div style={centerDivStyle}>
        <Box
          sx={{
            width: "60vw",
            height: 10,
            bgcolor: "#A8D5E2",
            mb: "50px",
          }}
        />
      </div>

      {props.element}

      <Box sx={{ height: 50 }} />
    </div>
  );
};

export default NewSection;
