/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import RegistrationForm from "./RegistrationForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  outline: "none",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {location.pathname === "/login" ? (
            <LoginForm />
          ) : (
            <RegistrationForm />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
