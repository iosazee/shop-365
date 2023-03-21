import React from 'react';
import {Container, Typography, Paper } from "@mui/material";

function About(){

    return(
        <Container>
            <Typography>About Us</Typography>
            <Paper elevation={3} sx={{my: 3}}>
                SHOP 365
            </Paper>
        </Container>
    )
}

export default About;