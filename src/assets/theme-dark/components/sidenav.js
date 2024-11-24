// Base styles
import colors from "assets/theme-dark/base/colors";
//import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
//const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: `1px solid ${background.border} !important`
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.secondary,
      height: `calc(100vh - ${pxToRem(160)})`,
      margin: pxToRem(16),
      marginTop: pxToRem(145),
      border: `1px solid ${background.border} !important`
    },

    paperAnchorDockedLeft: {
      //borderRight: "none"
    }
  }
};

export default sidenav;
