import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDTypography
import MDTypographyRoot from "components/MDTypography/MDTypographyRoot";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";

import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const MDTypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      underlineOnHover,
      opacity,
      children,
      ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          underlineOnHover,
          darkMode
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

// Setting default values for the props of MDTypography
MDTypography.defaultProps = {
  color: "text",
  fontWeight: "regular",
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  underlineOnHover: false,
  opacity: 1
};

// Typechecking props for the MDTypography
MDTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
    "#3d444d"
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf([
    "none",
    "capitalize",
    "uppercase",
    "lowercase"
  ]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom"
  ]),
  textGradient: PropTypes.bool,
  underlineOnHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number
};

export default MDTypography;
