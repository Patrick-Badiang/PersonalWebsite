import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Navigation(){

    return(
        <div style = {{
            position: 'absolute',
            width: "100%",
            transform: 'translateY(-50%)',
            
        }}>
            <Grid container  xs = {12}spacing = {3}>
                <Grid xs/>
                <Grid item xs ={3} >
                    
                    <Card elevation={5} sx = {{borderRadius: '50px'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            maxHeight= "500"
                            image = "/pictures/Aboutme.jpeg"/>
                            <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.0)',
                                    color: 'white',
                                    padding: '10px',
                                }}>
                                <Typography variant="h5" style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',}}>
                                        About Me
                                </Typography>
                            </Box>
                        </CardActionArea>
                    </Card>

                    
                </Grid>
                <Grid xs/>
                <Grid item xs ={3}>
                    <Card elevation={5} sx = {{borderRadius: '50px'}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                maxHeight= "500"
                                image = "/pictures/Projects.JPG"/>
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.0)',
                                    color: 'white',
                                    padding: '10px',
                                }}>
                                <Typography variant="h5" style={{
                                    color: 'black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',}}>
                                        Projects
                                </Typography>
                            </Box>
                                
                            </CardActionArea>
                           
                            
                        </Card>
                        
                </Grid>
                <Grid xs/>
                <Grid item xs ={3}>
                    <Card elevation={5} sx = {{borderRadius: '50px'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            maxHeight= "500"
                            image = "/pictures/Contact.JPG"/>
                            <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.0)',
                                    color: 'white',
                                    padding: '10px',
                                }}>
                                <Typography variant="h5" style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',}}>
                                        Contact Me
                                </Typography>
                            </Box>
                            
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs/>
            </Grid>
        </div>
    );
}

export default Navigation;