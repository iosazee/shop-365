import React from 'react';
import {AppBar,
Container,
Toolbar,
Box,
Button,
Menu,
MenuItem,
Typography,
IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const categories = ["Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];

function NavBar(){

    const [categoryMenu, setCategoryMenu] = React.useState(null);

    const handleOpenCategoryMenu = (event) => {
        setCategoryMenu(event.currentTarget);
    };

    const handleCloseCategoryMenu = () => {
        setCategoryMenu(null);
    };

    return(
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Box>
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
                    <Typography
                        variant="h6"
                        sx={{display: { xs: 'none', md: 'flex' }}}
                    >
                        Logo
                    </Typography>
                    <IconButton sx={{ flexGrow: 0 }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;