import { Button} from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight.js";

function Buttons() {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  };

  return (
    <div style={centerDivStyle}>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="https://drive.google.com/file/d/1oX-Zi-R0wPtorcALErG1ZiHppFF58C7-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none" }} // Optional: to prevent text from being capitalized
        >
          
            Resume <ArrowRightIcon fontSize = "small"/>
          
        </Button>
    </div>
  );
}

export default Buttons;
