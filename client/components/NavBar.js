import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import NavBarCollapse from "./NavBarCollapse";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = ["about", "schedule", "archives"];

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h4"
              color="primary"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              #slazz
            </Typography>
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  underline="none"
                  sx={{ my: 2, mx: 2, color: "primary", display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
          <NavBarCollapse pages={pages} />
          <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
