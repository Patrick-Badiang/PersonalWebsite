/**
 * 
 * Has Buttons, located in top center:
 *      Github, Email, LinkedIn
 * 
 * Intro has:
 *      Profile Pic, Name
 * 
 * Background:
 *      A rectangle
 */

import { Typography } from '@mui/material';
// import Buttons from './Buttons';
import React from 'react';


function Intro(){

    //Gif
    
    
    return(
    <div style = {{
        position: 'relative',
        width: '100%',
        marginTop: '0px',
       
        
    }}>
        <img src ='pictures/LandingPage.png'
        alt = 'cover'
        style = {{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
         } }
        />
    
    {/* <div style={{
        position: 'absolute',
        top: '0',
        right: '10%',
        }}>
        <Buttons style={{
            margin: '0 auto', // Center the Buttons horizontally
        }}/>
    </div> */}
    
    <div style = {{
        position: 'absolute',
        top: '10%',
        left: '5%',
        }}>
            <Typography variant="h1" >
            Patrick Vyn Badiang
            </Typography>
            
        </div>
    
    </div>
    );
}

export default Intro;