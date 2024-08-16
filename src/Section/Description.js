/**
 * Is a card component
 * 
 * props:
 *      Text Description
 */

import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";

const Description = (props) => {

    return(
        <Grid item xs = {12}>
            <Paper
                sx={{height: '40vh', backgroundColor: '#575761'}}>
            <Typography>
                {props.text}
            </Typography>
            </Paper>
        </Grid>
    )
}

export  default Description;