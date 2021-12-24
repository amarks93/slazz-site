import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../store/auth";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

const settings = ["Profile", "Account", "Dashboard"];

const ProfileMenu = (props) => {
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <img
            src="./images/Britney-Strong.png"
            style={{ width: "20px", marginLeft: "10px" }}
            sx={{ width: "20px" }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={props.handleCloseNavMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={() => dispatch(logoutThunk())}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
