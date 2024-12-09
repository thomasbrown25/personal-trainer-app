import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import colors from "assets/theme-dark/base/colors";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
const { background } = colors;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: background.grey,
  border: `1px solid ${background.border}`,
  boxShadow: 24,
  p: 4
};

export default function MDModal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <MDBox sx={style}>{children}</MDBox>
        </Fade>
      </Modal>
    </>
  );
}
