import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";
import { Chart } from "react-google-charts";

// Mui components
import { Grid, Card, Avatar, Divider, Tooltip, Icon } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LineChart } from "@mui/x-charts/LineChart";

// components
import Header from "components/Header/header.component";
import Footer from "layouts/footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Image from "components/Image/image.component";

// actions
import moment from "moment";
import { selectCurrentUser } from "store/user/user.selector";

// css
import colors from "assets/theme-dark/base/colors";

// Images

import Calendar from "components/Calendar/calendar.component";
import WorkoutPreview from "../workout-management/workout-preview.component";
import ClientPreview from "../client-management/client-preview.component";

const { background } = colors;

const TrainerDashboardPage = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <MainLayout>
      <Grid container spacing={10} sx={{ marginTop: 0 }}>
        <Grid item xs={12} sm={12} sx={{ paddingTop: "0 !important" }}>
          <WorkoutPreview />

          <ClientPreview />
          <Calendar />
        </Grid>
      </Grid>
    </MainLayout>
  );
};
TrainerDashboardPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(TrainerDashboardPage);
