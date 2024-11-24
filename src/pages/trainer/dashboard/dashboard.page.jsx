import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";
import { Chart } from "react-google-charts";

// Mui components
import {
  Grid,
  Card,
  Avatar,
  Divider,
  Tooltip,
  Icon,
  AppBar,
  Toolbar
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LineChart } from "@mui/x-charts/LineChart";

// actions
import moment from "moment";
import { selectCurrentUser } from "store/user/user.selector";

// css
import colors from "assets/theme-dark/base/colors";

// Images

import Calendar from "components/Calendar/calendar.component";
import WorkoutPreview from "../workout-management/workout-preview.component";
import ClientPreview from "../client-management/client-preview.component";
import Header from "components/Header/header.component";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Sidenav from "layouts/sidenav";
import Item from "layouts/dashboard-navbar/item";
import { navbarRow } from "layouts/dashboard-navbar/styles";
import { navbarContainer } from "layouts/dashboard-navbar/styles";

const { background } = colors;

const TrainerDashboardPage = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <MainLayout>
        <Grid container spacing={10} sx={{ marginTop: "5rem" }}>
          <Grid item xs={12} sm={12} sx={{ paddingTop: "0 !important" }}>
            <Header title={`Good evening, ${user.firstname}!`} />
            <MDBox mb={8}>
              <MDBox
                pt={2}
                mb={2}
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <MDTypography variant="h5" fontWeight="medium">
                  Recent Activity
                </MDTypography>
              </MDBox>
            </MDBox>

            <Card>
              <MDTypography variant="h5" fontWeight="medium">
                Recent Activity
              </MDTypography>
            </Card>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};
TrainerDashboardPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(TrainerDashboardPage);
