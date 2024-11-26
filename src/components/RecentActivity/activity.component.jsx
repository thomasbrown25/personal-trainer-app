import { useState } from "react";
import { Icon } from "@mui/material";

// components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import colors from "assets/theme-dark/base/colors";

const { background } = colors;

const Activity = ({ activity }) => {
  const { title, description, date } = activity;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <MDBox mb={1} sx={{ borderBottom: `1px solid ${background.border}` }}>
      <MDBox display="flex" justifyContent="space-between">
        <MDBox display="flex" alignItems="center">
          {isDropdownOpen ? (
            <Icon fontSize="large" onClick={handleDropdown}>
              keyboard_arrow_down
            </Icon>
          ) : (
            <Icon fontSize="large" onClick={handleDropdown}>
              keyboard_arrow_right
            </Icon>
          )}
          <MDTypography variant="h6" onClick={handleDropdown}>
            {title}
          </MDTypography>
        </MDBox>
        <MDTypography variant="h6" onClick={handleDropdown}>
          {date}
        </MDTypography>
      </MDBox>
      {isDropdownOpen && (
        <MDBox display="flex" alignItems="center" ml={8} mb={1}>
          <MDTypography variant="h6" onClick={handleDropdown}>
            {description}
          </MDTypography>
        </MDBox>
      )}
    </MDBox>
  );
};

export default Activity;
