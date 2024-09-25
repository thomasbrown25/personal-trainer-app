import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// css
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 PRO React examples
import NotificationItem from "components/NotificationItem";

// Custom styles for SubNavbar
import { navbarContainer, navbarRow } from "layouts/dashboard-navbar/styles";

// store
import { selectCurrentUser } from "store/user/user.selector";

import { logout } from "store/user/user.action";
import MDTypography from "components/MDTypography";

// Base styles
import breakpoints from "assets/theme/base/breakpoints";
import { Divider, Tab, Tabs } from "@mui/material";

const { background } = colors;

function SubNavbar({ isMini }) {
  const user = useSelector(selectCurrentUser);

  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        background: "#000003",
        borderBottom: `2px solid ${background.border}`
      }}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox
          display="flex"
          justifyContent="flex-start"
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini }, false)}
        >
          <MDBox display="flex">
            <Tabs
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab
                {...a11yProps(0)}
                onClick={() => setTabValue(0)}
                index={0}
                value={tabValue}
                label="Dashboard"
                icon={
                  <Icon fontSize="small" sx={{ ml: 4 }}>
                    home
                  </Icon>
                }
              />
              {tabValue === 0 && (
                <Divider width="35%" sx={{ position: "absolute", bottom: 0 }} />
              )}
              <Tab
                {...a11yProps(1)}
                onClick={() => setTabValue(1)}
                index={1}
                value={tabValue}
                label="Clients"
                icon={
                  <Icon fontSize="small" sx={{ ml: 4 }}>
                    people
                  </Icon>
                }
              />
              {tabValue === 1 && (
                <Divider width="35%" sx={{ position: "absolute", bottom: 0 }} />
              )}
              <Tab
                {...a11yProps(2)}
                onClick={() => setTabValue(2)}
                index={2}
                value={tabValue}
                label="Workouts"
                icon={
                  <Icon fontSize="small" sx={{ ml: 4 }}>
                    videocam
                  </Icon>
                }
              />
              <Tab
                {...a11yProps(3)}
                onClick={() => setTabValue(3)}
                index={3}
                value={tabValue}
                label="Settings"
                icon={
                  <Icon fontSize="small" sx={{ ml: 4 }}>
                    settings
                  </Icon>
                }
              />
            </Tabs>
          </MDBox>
        </MDBox>
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of SubNavbar
SubNavbar.defaultProps = {
  absolute: false,
  light: false
};

// Typechecking props for the SubNavbar
SubNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool
};

export default connect(null, { logout })(SubNavbar);
