import React from 'react';
import {Container, Typography} from "@mui/material";

function About(){

    return(
        <Container>
            <Typography variant="h3" style={{marginTop:25}}>About Us</Typography>
            <Container  sx={{my: 4}}>
                <Typography sx={{my: 1}}>
                    At Shop 365, we believe that everyone deserves access to high-quality products that enhance their lives. We are committed to providing a wide selection of goods, including men's and women's clothing, jewelry, and electronics, at affordable prices. Our mission is to make shopping easy, convenient, and enjoyable for all of our customers, while also providing exceptional customer service and fast shipping.
                </Typography>
                <Typography sx={{my: 1}}>
                    We strive to be a one-stop shop for all of your needs, and we are always looking for new and innovative ways to improve your shopping experience.
                </Typography>
                <Typography sx={{my: 1}}>
                    At Shop 365, we believe that shopping should be an experience, not a chore.
                </Typography>
            </Container>
        </Container>
    )
}

export default About;