import React from 'react';
import {Container, Typography, Paper } from "@mui/material";

function About(){

    return(
        <Container>
            <Typography>About Us</Typography>
            <Paper elevation={3} sx={{my: 3}}>
                <Typography>
                    Mission statement
                </Typography>
                <Typography>
                At Shop 365, we believe that everyone deserves access to high-quality products that enhance their lives. We are committed to providing a wide selection of goods, including men's and women's clothing, jewelry, and electronics, at affordable prices. Our mission is to make shopping easy, convenient, and enjoyable for all of our customers, while also providing exceptional customer service and fast shipping. We strive to be a one-stop shop for all of your needs, and we are always looking for new and innovative ways to improve your shopping experience. At Shop 365, we believe that shopping should be an experience, not a chore.
                </Typography>
            </Paper>
        </Container>
    )
}

export default About;