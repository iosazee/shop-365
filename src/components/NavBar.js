import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppBar,
    Container,
    Toolbar,
    Box,
    Button,
    Menu,
    MenuItem,
    Typography,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    styled,
    alpha,
    InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchIcon from '@mui/icons-material/Search';

const categories = ["Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function NavBar(){

    // Category Dropdown
    const [categoryMenu, setCategoryMenu] = useState(null);

    const handleOpenCategoryMenu = (event) => {
        setCategoryMenu(event.currentTarget);
    };

    const handleCloseCategoryMenu = () => {
        setCategoryMenu(null);
    };

    // Hamburger Menu
    const[anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    // Category Accordion 
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // Search Accordion
    const [searchExpand, setSearchExpand] = useState(false);
    const toggleAccordion = () => {
      setSearchExpand((prev) => !prev);
    };

    return(
        <AppBar position="static">
            <Accordion expanded={searchExpand}>
                <AccordionSummary>
                    <Container>
                        <Toolbar disableGutters>
                            <Grid container spacing={0}>

                                {/* Left Side Buttons */}
                                <Grid item xs={4} sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>

                                    {/* Hamburger Menu */}
                                    <Box sx={{flexGrow: 0, display:{xs:"flex", md:"none"}}}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenNavMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>

                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                            sx={{
                                                display: { xs: 'block', md: 'none' },
                                            }}
                                        >
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography>Categories</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {categories.map((category) => (
                                                        <MenuItem key={category} onClick={handleCloseCategoryMenu}>
                                                            <Typography textAlign="center">{category}</Typography>
                                                        </MenuItem>
                                                    ))}
                                                </AccordionDetails>
                                            </Accordion> 

                                            <MenuItem key="contactUs" onClick={handleCloseNavMenu}>
                                                <Link to="/contact" style={{color: 'inherit', textDecoration: 'none' }}>
                                                    <Typography textAlign="center">Contact Us</Typography>
                                                </Link>
                                            </MenuItem>
                                            <MenuItem key="profile" onClick={handleCloseNavMenu}>
                                                <Link to="/profile" style={{color: 'inherit', textDecoration: 'none' }}>
                                                    <Typography textAlign="center">Profile</Typography>
                                                </Link>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                                        
                                    {/* Category Menu */}
                                    <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                                        <Button onClick={handleOpenCategoryMenu}
                                        sx={{ my: 2, color: 'inherit', display: 'block' }}>
                                            Categories
                                        </Button>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            anchorEl={categoryMenu}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left'
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(categoryMenu)}
                                            onClose={handleCloseCategoryMenu}
                                        >
                                            {categories.map((category) => (
                                                <MenuItem key={category} onClick={handleCloseCategoryMenu}>
                                                    <Typography textAlign="center">{category}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                    
                                    {/* Contact Us Button */}
                                    <Typography
                                        variant="button"
                                        sx={{display: { xs: 'none', md: 'flex' }}}
                                    >
                                        <Link to="/contact" style={{color: 'inherit', textDecoration: 'none' }}>
                                            Contact Us
                                        </Link>
                                    </Typography>
                                    
                                    {/* Search Bar Toggle */}
                                    <Button onClick={toggleAccordion} style={{color: 'inherit', textDecoration: 'none' }}>
                                        <SearchRoundedIcon/>
                                    </Button>
                                </Grid>
                                
                                {/* Logo */}
                                <Grid item xs={4} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Typography
                                        variant="h6"
                                        sx={{display:'flex'}}
                                    >
                                        <Link to="/" style={{color: 'inherit', textDecoration: 'none' }}>
                                            Logo
                                        </Link>
                                    </Typography>
                                </Grid>
                                
                                {/* Right side icons */}
                                <Grid item xs={4} sx={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                                    <IconButton sx={{display: { xs: 'none', md: 'flex' } }}>
                                        <Link to="/profile" style={{color: 'inherit', textDecoration: 'none' }}>
                                            <AccountIcon/>  
                                        </Link>
                                    </IconButton>

                                    <IconButton>
                                        <Link to="/cart" style={{color: 'inherit', textDecoration: 'none' }}>
                                            <ShoppingCartIcon />
                                        </Link>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AccordionSummary>

                {/* Search Bar */}
                <AccordionDetails>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </AccordionDetails>
            </Accordion>
        </AppBar>
    )
}

export default NavBar;