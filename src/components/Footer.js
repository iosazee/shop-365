import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Logo from '../assets/footerLogo.svg';

function Footer(){
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "lightgrey"
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box>
              <img src={Logo} alt="Logo" style={{maxHeight: "35px", background: "none"}}></img>
            </Box>
            <Box>
              <Typography>Slogan</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography>Socials</Typography>
            </Box>
            <Box>
              <Typography>About</Typography>
              <Typography>FAQ</Typography>
              <Typography>Contact Us</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`© ${new Date().getFullYear()} Shop365 | All Rights Reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;