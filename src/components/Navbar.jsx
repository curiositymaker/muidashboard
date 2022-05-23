import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Box, Menu, MenuItem } from '@mui/material'
import React from 'react'

import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(2),
  alignItems: "center",
  padding: "0 10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }

}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(2),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  }
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Admin App</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" 
          sx={{ width: 30, height: 30 }} 
          onClick={() => setOpen(true)}
            />
        </Icon>
        <UserBox>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" 
          sx={{ width: 30, height: 30 }} 
          onClick={() => setOpen(true)}
          />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}
