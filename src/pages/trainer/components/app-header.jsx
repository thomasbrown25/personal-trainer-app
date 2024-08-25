import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import logo from "assets/images/favicon.png";
import backgroundImage from "assets/images/bg-profile.jpeg";

// store
import { selectCurrentUser } from "store/user/user.selector";
import { Divider } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <MDBox sx={{ p: 3 }}>{children}</MDBox>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function AppHeader({ children }) {
  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const user = useSelector(selectCurrentUser);

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
    <MDBox position="relative" mb={5}>
      <Card
        sx={{
          position: "relative",
          mt: 0,
          mx: 3,
          py: 2,
          px: 2
        }}
      >
        <Grid container spacing={3} alignItems="center" mb={3}>
          <MDBox display="flex" width="100%" mt={3}>
            <MDBox display="flex" ml={3}>
              <MDAvatar
                src={logo}
                alt="profile-image"
                shadow="sm"
                sx={{ marginTop: "-.2rem" }}
              />
              <MDBox height="100%" mt={0.5} lineHeight={1} ml={2}>
                <MDTypography variant="h4" fontWeight="medium">
                  {`${user?.firstname} ${user?.lastname}`}
                </MDTypography>
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  {user?.role}
                </MDTypography>
              </MDBox>
            </MDBox>
            <Grid item xs={12} md={6} lg={5} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <MDBox>
                  <Tabs
                    orientation={tabsOrientation}
                    value={tabValue}
                    onChange={handleSetTabValue}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      {...a11yProps(0)}
                      onClick={() => setTabValue(0)}
                      index={0}
                      value={tabValue}
                      label="Dashboard"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25, ml: 4 }}>
                          home
                        </Icon>
                      }
                    />
                    {tabValue === 0 && (
                      <Divider
                        width="35%"
                        sx={{ position: "absolute", bottom: 0 }}
                      />
                    )}
                    <Tab
                      {...a11yProps(1)}
                      onClick={() => setTabValue(1)}
                      index={1}
                      value={tabValue}
                      label="Clients"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25, ml: 4 }}>
                          people
                        </Icon>
                      }
                    />
                    {tabValue === 1 && (
                      <Divider
                        width="35%"
                        sx={{ position: "absolute", bottom: 0 }}
                      />
                    )}
                    <Tab
                      {...a11yProps(2)}
                      onClick={() => setTabValue(2)}
                      index={2}
                      value={tabValue}
                      label="Workouts"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25, ml: 4 }}>
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
                        <Icon fontSize="small" sx={{ mt: -0.25, ml: 4 }}>
                          settings
                        </Icon>
                      }
                    />
                  </Tabs>
                </MDBox>
                <CustomTabPanel value={tabValue} index={0}>
                  Item One
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                  Item Two
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                  Item Three
                </CustomTabPanel>
              </AppBar>
            </Grid>
          </MDBox>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the AppHeader
AppHeader.defaultProps = {
  children: ""
};

// Typechecking props for the AppHeader
AppHeader.propTypes = {
  children: PropTypes.node
};

export default AppHeader;
