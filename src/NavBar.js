import {React, useState} from 'react';
import {AppBar,
Container,
Toolbar,
Box,
Button,
Menu,
MenuItem,
Typography,
IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountIcon from '@mui/icons-material/AccountCircleRounded';

const categories = ["Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];
const pages =["Categories", "Contact Us", "Profile"];

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

    return(
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        sx={{display: { xs: 'none', md: 'flex' }}}
                    >
                        Logo
                    </Typography>

                    <Box sx={{flexGrow: 1, display:{xs:"flex", md:"none"}}}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleOpenCategoryMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}>
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

                    <IconButton sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <AccountIcon/>
                    </IconButton>

                    <IconButton sx={{ flexGrow: 0 }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;