/**
 * Is title and has line underneath
 */

import { Card, CardActionArea, CardMedia, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function AboutMe(){

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return(
        <>
        {isMediumScreen ? (
            <Grid container xs = {12} direction={"column"} spacing={2}>

            
            <Grid  item xs = {12}>
                <Typography variant = "body1" >
                    Hello! My name is Patrick Vyn Badiang and I am a dedicated Computer Science student at Virginia Tech with a passion for leveraging technology to create meaningful solutions. Currently in my sophomore year, I am enthusiastic about exploring various aspects of software development and honing my skills in programming languages such as C#, Java, and JavaScript, among others.
                </Typography>
                <Typography>
                    -
                </Typography>
                <Typography variant = "body1">
                
                With a keen interest in web and game development, I have actively contributed to several projects, including serving as a Web Developer for the Filipino American Student Association. Here, I spearheaded the development of a dynamic website using Reactjs and Material-Ui, enhancing user engagement and accessibility. Additionally, my experience as a Game Developer for personal projects has equipped me with the ability to design and implement fully functional AI systems, demonstrating my proficiency in Unity and 3D modeling tools like Blender and GIMP.                    
                
                </Typography>
                <Typography>
                    -
                </Typography>
                <Typography variant = "body1">
                In addition to my technical endeavors, I have also taken on leadership roles, such as Engineering Team Leader for a school project, where I facilitated effective communication and collaboration within a team of six. My goal is to continue expanding my skill set, contributing to impactful projects, and collaborating with like-minded individuals to innovate and drive positive change in the field of computer science. To stay on this journey with me, feel free to send me a connect! Here, I will be posting any updates on any of passions as well as showcase different ways I try to expand my skillset.                    
                </Typography>
            </Grid>
            <Grid xs/>
            <Grid  container xs = {12}>
                <Grid xs/>
                <Grid xs = {5}>
                <Card elevation={5} sx = {{
                    borderRadius: '10px', 
                    maxHeight: "678px",
                    maxWidth: "626px",}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        
                        image = "pictures/ProfilePic.png"/>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid xs/>
                
            </Grid>
        </Grid>  
        ): (
            <Grid container xs = {11} direction={"row"} spacing={2}>
            <Grid xs/>
            <Grid  item xs = {5}>
                <Card elevation={5} sx = {{
                    borderRadius: '50px', 
                    maxHeight: "678px",
                    maxWidth: "626px",
                    mt: "40px"}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        
                        image = "pictures/ProfilePic.png"/>
                    </CardActionArea>
                </Card>
                
            </Grid>
            <Grid  item xs = {6}>
                <Typography variant = "body1" >
                    Hello! My name is Patrick Vyn Badiang and I am a dedicated Computer Science student at Virginia Tech with a passion for leveraging technology to create meaningful solutions. Currently in my sophomore year, I am enthusiastic about exploring various aspects of software development and honing my skills in programming languages such as C#, Java, and JavaScript, among others.
                </Typography>
                <Typography>
                    -
                </Typography>
                <Typography variant = "body1">
                
                With a keen interest in web and game development, I have actively contributed to several projects, including serving as a Web Developer for the Filipino American Student Association. Here, I spearheaded the development of a dynamic website using Reactjs and Material-Ui, enhancing user engagement and accessibility. Additionally, my experience as a Game Developer for personal projects has equipped me with the ability to design and implement fully functional AI systems, demonstrating my proficiency in Unity and 3D modeling tools like Blender and GIMP.                    
                
                </Typography>
                <Typography>
                    -
                </Typography>
                <Typography variant = "body1">
                In addition to my technical endeavors, I have also taken on leadership roles, such as Engineering Team Leader for a school project, where I facilitated effective communication and collaboration within a team of six. My goal is to continue expanding my skill set, contributing to impactful projects, and collaborating with like-minded individuals to innovate and drive positive change in the field of computer science. To stay on this journey with me, feel free to send me a connect! Here, I will be posting any updates on any of passions as well as showcase different ways I try to expand my skillset.                    
                </Typography>
            </Grid>
            <Grid xs/>
        </Grid>  
        )}
            
            
        </>
    );
}

export default AboutMe;