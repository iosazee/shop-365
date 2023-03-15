import React from 'react';
import {AppBar,
Container,
Toolbar,
Box,
Button,
Menu,
MenuItem,
Typography} from '@mui/material'

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
                <Toolbar>
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
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;