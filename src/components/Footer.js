import React from "react";
import {Link} from 'react-router-dom';
import { Box, Container, Grid, Typography, Button} from "@mui/material";
import Logo from '../assets/logo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(){
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#D1D1D1"
      }}
    >
      <Container maxWidth="lg">
        <Grid container>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems:'center', justifyContent: {xs:'center', sm:'flex-start'}}}>
            <Box sx={{my:2}}>
              <Box sx={{display:'flex', justifyContent: {xs:'center', sm:'flex-start'}}}>
                <img src={Logo} alt="Logo" style={{maxHeight: "50px", background: "none"}}></img>
              </Box>
              <Typography sx={{color: '#303030', fontStyle: 'italic', textAlign: {xs:'center', sm:'left'}}}>Your one-stop shop for style, value, and convenience.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems: 'center', justifyContent: {xs:'center', sm:'flex-end'}}}>
            <Box>
              <Box sx={{display:'flex', justifyContent:{xs:'center', sm:'flex-end'}}}>
                <a href="https://twitter.com/shop365social" target="_blank" rel="noreferrer" style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent'}}>
                  <TwitterIcon sx={{mx: 1}}/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <FacebookIcon sx={{mx: 1}}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <InstagramIcon sx={{mx: 1}}/>
                </a>
              </Box>

              <Box sx={{display: 'flex'}}>
                <Button style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/about" style={{color: '#303030', textDecoration: 'none' }}>
                    About
                  </Link>
                </Button>         
                <Button style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/faq" style={{color: '#303030', textDecoration: 'none' }}>
                    FAQ's
                  </Link>
                </Button> 
                <Button style={{color: '#303030', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/contact" style={{color: '#303030', textDecoration: 'none' }}>
                    Contact Us
                  </Link>
                </Button> 
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{borderTop: "1px solid #303030"}}>
            <Typography sx={{mt: 1.5}}color="#999" variant="subtitle1">
              {`© ${new Date().getFullYear()} Shop365 | All Rights Reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;