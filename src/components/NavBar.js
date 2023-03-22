import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import Badge from '@mui/material/Badge';
import AccountIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.svg';

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


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    backgroundColor: "#00ff335e",
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


function NavBar({searchQuery, handleSearchQuery, setSearchSubmission}){

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

    const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    const cartCount = cartItems ? cartItems.map(item => item.count || 0).reduce((a, b) => a + b, 0) : 0;

    const navigate = useNavigate()

    const handleSearchSubmit =(e) => {
        e.preventDefault()
        setSearchSubmission(true)
        toggleAccordion()
        navigate("/products/search")
    }


    return(
        <AppBar position="sticky" >
            <Accordion expanded={searchExpand} sx={{backgroundColor: "#9D9DA2" }}>
                <AccordionSummary>
                    <Container>
                        <Toolbar disableGutters >
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
                                                    <MenuItem  onClick={handleCloseNavMenu}>
                                                        <Link to='/products/mens' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Men's Clothing</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseNavMenu}>
                                                        <Link to='/products/womens' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Women's Clothing</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseNavMenu}>
                                                        <Link to='/products/jewelery' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Jewelery</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseNavMenu}>
                                                        <Link to='/products/electronics' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Electronics</Typography>
                                                        </Link>
                                                    </MenuItem>
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
                                        style={{ backgroundColor: 'transparent' }}
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
                                             <MenuItem  onClick={handleCloseCategoryMenu}>
                                                        <Link to='/products/mens' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Men's Clothing</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseCategoryMenu}>
                                                        <Link to='/products/womens' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Women's Clothing</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseCategoryMenu}>
                                                        <Link to='/products/jewelery' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Jewelery</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  onClick={handleCloseCategoryMenu}>
                                                        <Link to='/products/electronics' style={{color: 'inherit', textDecoration: 'none' }}>
                                                            <Typography textAlign="center">Electronics</Typography>
                                                        </Link>
                                                    </MenuItem>
                                        </Menu>
                                    </Box>
                                    {/* Contact Us Button */}
                                    <Button style={{color: 'inherit', textDecoration: 'none', backgroundColor: 'transparent' }} sx={{display: { xs: 'none', md: 'flex' }}}>
                                        <Link to="/contact" style={{color: 'inherit', textDecoration: 'none' }}>
                                            Contact Us
                                        </Link>
                                    </Button>
                                    {/* Search Bar Toggle */}
                                    <Button onClick={toggleAccordion} style={{color: 'inherit', textDecoration: 'none', backgroundColor: 'transparent'}}>
                                        <SearchRoundedIcon/>
                                    </Button>
                                </Grid>
                                {/* Logo */}
                                <Grid item xs={4} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Link to="/" style={{color: 'inherit', textDecoration: 'none' }} xs={{py: 0}}>
                                        <img src={Logo} alt="Logo" style={{maxHeight: '65px'}}></img>
                                    </Link>
                                </Grid>
                                {/* Right side icons */}
                                <Grid item xs={4} sx={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                                    <Button sx={{display: { xs: 'none', md: 'flex' } }} style={{ backgroundColor: 'transparent', color: 'inherit', textDecoration: 'none'}}>
                                        <Link to="/profile" style={{color: 'inherit', textDecoration: 'none' }}>
                                            <AccountIcon/>
                                        </Link>
                                    </Button>
                                        <Link to="/cart" style={{color: 'inherit', textDecoration: 'none' }}>
                                            <IconButton>
                                                <Badge badgeContent={cartCount} color="primary" showZero data-testid="cart-count" >
                                                    <ShoppingCartIcon color='action' />
                                                </Badge>
                                            </IconButton>
                                        </Link>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AccordionSummary>

                {/* Search Bar */}
                <AccordionDetails>
                    <form onSubmit={handleSearchSubmit}>
                        <Search>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange = {handleSearchQuery}
                            value={searchQuery}
                            />
                            <Button type='submit' variant="contained" >
                                <SearchIcon />
                            </Button>
                        </Search>
                    </form>
                </AccordionDetails>
            </Accordion>
        </AppBar>
    )
}

export default NavBar;