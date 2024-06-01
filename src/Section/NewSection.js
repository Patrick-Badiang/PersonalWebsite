/**
 * Is title and has line underneath
 */

import { Box, Typography } from "@mui/material";

const NewSection = (props) =>{
    
    const centerDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }

    return(
        <>
            
            <Typography variant="h3" style={centerDivStyle}>
                {props.title}
            </Typography>

            <div style={centerDivStyle}>
                <Box sx ={{
                    width: '60vw',
                    height: 10,
                    bgcolor: '#A8D5E2',
                    mb: '50px'
                }}/>
            </div>

                {props.element}
            
            <Box sx = {{height: 200}}/>
                
               

                
                     
                      
                    
                
            
        </>
    );
}

export default NewSection;