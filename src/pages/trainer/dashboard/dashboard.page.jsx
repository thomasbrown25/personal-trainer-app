import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

// actions
import moment from "moment";
import Image from "components/Image/image.component";

// css
import colors from "assets/theme-dark/base/colors";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/favicon.png";
import team2 from "assets/images/favicon.png";
import team3 from "assets/images/favicon.png";
import team4 from "assets/images/favicon.png";
import WorkoutVideoCard from "./workout-video-card";
import AppHeader from "../components/app-header";

const { background } = colors;

const TrainerDashboardPage = ({ user: { currentUser, loading } }) => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G"
  ];
  return (
    <MainLayout>
      <MDBox mb={2} />
      <AppHeader>
        <MDBox mt={0} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <MDBox display="flex" justifyContent="space-between" width="100%">
                <MDBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  px={2}
                >
                  <Avatar
                    alt={currentUser?.firstname}
                    src={require("assets/images/me/me-and-isaiah.jpg")}
                    sx={{
                      width: "15rem",
                      height: "15rem",
                      marginBottom: "1rem"
                    }}
                  />
                  <Link to="/trainer-profile" style={{ width: "100%" }}>
                    <MDButton variant="outlined" size="small" fullWidth>
                      Edit profile
                    </MDButton>
                  </Link>
                </MDBox>
                <MDBox display="flex" flexDirection="column">
                  <MDBox display="flex" justifyContent="space-between">
                    <MDTypography variant="h6" fontWeight="medium">
                      Clients
                    </MDTypography>
                    <MDTypography variant="h6" fontWeight="medium">
                      251
                    </MDTypography>
                  </MDBox>
                  <LineChart
                    width={500}
                    height={300}
                    series={[{ data: pData, label: "pv" }]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                  />
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Workouts
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Recently added workouts
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <WorkoutVideoCard
                image={homeDecor1}
                label="workout #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view workout"
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" }
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <WorkoutVideoCard
                image={homeDecor2}
                label="workout #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view workout"
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" }
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <WorkoutVideoCard
                image={homeDecor3}
                label="workout #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view workout"
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" }
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <WorkoutVideoCard
                image={homeDecor4}
                label="workout #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view workout"
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" }
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </AppHeader>
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
