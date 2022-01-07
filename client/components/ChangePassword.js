import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updatePassword } from "../store/auth";

import { Box, Button, TextField, Typography } from "@mui/material";

const ChangePassword = () => {
  const [changePassword, setChangePassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();
  const handleUpdatePassword = () => {
    dispatch(updatePassword(oldPassword, newPassword));
  };

  return (
    <>
      {!changePassword ? (
        <Box sx={{ width: "100%", my: 1 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => setChangePassword(true)}
            sx={{ width: "100%" }}
          >
            Change password
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ width: "100%", my: 1 }}>
            <Typography>Old password</Typography>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              value={oldPassword}
              onChange={(evt) => setOldPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", my: 1 }}>
            <Typography>New password</Typography>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              value={newPassword}
              onChange={(evt) => setNewPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", my: 1 }}>
            <Typography>Confirm new password</Typography>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              value={confirmNewPassword}
              onChange={(evt) => setConfirmNewPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleUpdatePassword}
              sx={{ width: "100%" }}
            >
              Update password
            </Button>
            <Button
              onClick={() => setChangePassword(false)}
              sx={{
                textTransform: "none",
                width: "100%",
              }}
              className="center hover-link"
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default ChangePassword;
