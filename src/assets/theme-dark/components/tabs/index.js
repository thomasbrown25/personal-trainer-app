// Base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;
const { md } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      //position: "absolute",
      //backgroundColor: background.card,
      //borderRadius: borderRadius.xl,
      //  minHeight: "2px",
      padding: pxToRem(4)
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important"
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%"
      }
    },

    indicator: {
      display: "none",
      height: "2px",
      width: "70px",
      borderRadius: borderRadius.lg,
      backgroundColor: background.white,
      boxShadow: md,
      transition: "all 500ms ease"
    }
  }
};

export default tabs;
