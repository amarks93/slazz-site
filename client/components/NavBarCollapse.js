import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBarCollapse = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon color="primary" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {props.pages.map((page) => (
            <NavLink
              key={page}
              to={`/${page}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
      </Box>
      <Box
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/">
          <Typography variant="h4" color="primary">
            #slazz
          </Typography>
        </NavLink>
      </Box>
    </>
  );
};

export default NavBarCollapse;
