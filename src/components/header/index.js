import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <HomeOutlined />
                <Typography variant='h6'>
                    Home
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;