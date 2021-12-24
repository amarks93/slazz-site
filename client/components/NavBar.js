import React from "react";
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            color="primary"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            #slazz
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                underline="none"
                href="#"
                sx={{ my: 2, mx: 2, color: "primary", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <NavBarCollapse pages={pages} />
          <ProfileMenu handleCloseNavMenu={handleCloseNavMenu} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
