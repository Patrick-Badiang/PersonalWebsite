import { Button, ButtonGroup, Typography } from "@mui/material";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Buttons(){
    const centerDivStyle = {
        display: 'flex',
        justifyContent:'right',
        alignItems:'center',
      };

    return(
        <div style = {centerDivStyle}>
            <ButtonGroup>
            <Button
      variant="contained"
      color="primary"
      component="a"
      href="https://drive.google.com/file/d/1EFeKczhB5KE2tx10vy6lvsSvJvBnskzx/view"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textTransform: 'none' }} // Optional: to prevent text from being capitalized
    >
                    {/* <Typography variant="body1">
                        Resume <ArrowRightIcon/>
                    </Typography> */}
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Buttons;