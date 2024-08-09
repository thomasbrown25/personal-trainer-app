// Base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: `1px solid ${background.dark} !important`
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.white,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      border: `1px solid ${background.dark} !important`
    },

    paperAnchorDockedLeft: {
      //borderRight: "none"
    }
  }
};

export default sidenav;
