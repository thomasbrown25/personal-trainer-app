import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// components
import Header from "components/Header/header.component";
import Footer from "layouts/footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DefaultStatisticsCard from "components/DefaultStatisticsCard";
import TrainerVideo from "components/TrainerVideo/trainer-video.component";

// actions
import moment from "moment";
import Image from "components/Image/image.component";

// css
import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const TrainerDashboardPage = ({ user: { currentUser, loading } }) => {
  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <MDBox
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          width="100%"
          maxWidth="1400px"
        >
          {/* Left Panel */}
          <MDBox width="30%" px={1}>
            <Image
              imageUrl={require("assets/images/me/me-and-isaiah.jpg")}
              height="19rem"
              width="100%"
              border={`3px solid ${background.border}`}
              borderRadius="50%"
            />
            <MDBox mt={2}>
              <MDButton
                variant="gradient"
                sx={{ backgroundColor: background.grey }}
                type="submit"
                fullWidth
              >
                Edit profile
              </MDButton>
            </MDBox>
          </MDBox>

          {/* Right Panel */}
          <MDBox width="70%" px={1}>
            {/* Trainer Videos */}
            <Grid container spacing={2} className="jc-center">
              <Grid item xs={12} sm={12} md={12}>
                <MDBox display="flex" justifyContent="space-between">
                  <MDTypography variant="h6" fontWeight="medium">
                    Workout videos
                  </MDTypography>
                  <MDTypography
                    component={Link}
                    to="/workouts-add-new-video"
                    variant="button"
                    color="info"
                    underlineOnHover
                  >
                    View workouts
                  </MDTypography>
                </MDBox>
              </Grid>

              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultStatisticsCard
                  title="clients"
                  count="120"
                  percentage={{
                    color: "success",
                    value: "+10%",
                    label: "since last month"
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <MDBox display="flex" justifyContent="space-between" mt={4}>
                <MDTypography variant="h6" fontWeight="medium">
                  254 clients
                </MDTypography>
                <MDTypography
                  component={Link}
                  to="/workouts-add-new-video"
                  variant="button"
                  color="info"
                  underlineOnHover
                >
                  View clients
                </MDTypography>
              </MDBox>
            </Grid>

            <MDBox py={2}>
              <DefaultStatisticsCard
                title="This will be a client graph"
                count="120"
                percentage={{
                  color: "success",
                  value: "+10%",
                  label: "since last month"
                }}
              />
            </MDBox>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MDBox display="flex" justifyContent="space-between" mt={4}>
                  <MDTypography variant="h6" fontWeight="light">
                    Recent activity
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item xs={12}>
                <MDBox display="flex" justifyContent="flex-start">
                  <Card sx={{ width: "100%" }}>
                    <MDBox display="flex" flexDirection="column" p={2}>
                      <MDBox>
                        <MDTypography variant="h6" fontWeight="regular">
                          - activity 1
                        </MDTypography>
                        <MDTypography variant="h6">- activity 2</MDTypography>
                        <MDTypography variant="h6">- activity 3</MDTypography>
                      </MDBox>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
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
