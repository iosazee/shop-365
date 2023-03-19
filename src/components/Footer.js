import React from "react";
import {Link} from 'react-router-dom';
import { Box, Container, Grid, Typography, Button} from "@mui/material";
import Logo from '../assets/footerLogo.svg';
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
        backgroundColor: "lightgrey"
      }}
    >
      <Container maxWidth="lg">
        <Grid container>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
            <img src={Logo} alt="Logo" style={{maxHeight: "50px", background: "none"}}></img>
            <Typography>Slogan</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <Box>
              <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                <a href="" target="_blank">
                  <TwitterIcon />
                </a>
                <a href="" target="_blank">
                  <FacebookIcon />
                </a>
                <a href="" target="_blank">
                  <InstagramIcon />
                </a>
              </Box>

              <Box sx={{display: 'flex'}}>
                <Button style={{color: 'inherit', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/" style={{color: 'inherit', textDecoration: 'none' }}>
                    About
                  </Link>
                </Button>            
                <Button style={{color: 'inherit', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/" style={{color: 'inherit', textDecoration: 'none' }}>
                    FAQ
                  </Link>
                </Button> 
                <Button style={{color: 'inherit', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/contact" style={{color: 'inherit', textDecoration: 'none' }}>
                    Contact Us
                  </Link>
                </Button> 
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{borderTop: "1px solid darkgrey"}}>
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