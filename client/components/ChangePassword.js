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
    setChangePassword(false);
  };

  let isDisabled =
    oldPassword === newPassword ||
    newPassword !== confirmNewPassword ||
    [oldPassword, newPassword, confirmNewPassword].some(
      (field) => field === ""
    );

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
              name="oldPassword"
              value={oldPassword}
              onChange={(evt) => setOldPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", my: 1 }}>
            <Typography>New password</Typography>
            <TextField
              fullWidth
              error={oldPassword === newPassword}
              helperText={
                oldPassword === newPassword &&
                "New password cannot be the same as previous password."
              }
              size="small"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(evt) => setNewPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", my: 1 }}>
            <Typography>Confirm new password</Typography>
            <TextField
              fullWidth
              error={newPassword !== confirmNewPassword}
              helperText={
                newPassword === confirmNewPassword
                  ? ""
                  : "Passwords should match."
              }
              size="small"
              type="password"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(evt) => setConfirmNewPassword(evt.target.value)}
              sx={{ bgcolor: "white" }}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
            <Button
              variant="contained"
              size="large"
              disabled={isDisabled}
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
