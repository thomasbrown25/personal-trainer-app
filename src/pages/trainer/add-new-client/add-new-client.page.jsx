import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card, Avatar } from "@mui/material";
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
import styled from "@emotion/styled";
const { background } = colors;

const AddNewClientPage = ({ user: { currentUser, loading } }) => {
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
            <Avatar
              alt="Remy Sharp"
              src={require("assets/images/me/me-and-isaiah.jpg")}
              sx={{ width: "100%", height: "20rem" }}
            />
            <MDBox mt={2}>
              <Link to="/">
                <MDButton variant="outlined" fullWidth>
                  Edit profile
                </MDButton>
              </Link>
            </MDBox>
            <MDBox mt={2}>
              <Link to="/add-new-client">
                <MDButton variant="outlined" fullWidth>
                  Add new client
                </MDButton>
              </Link>
            </MDBox>
          </MDBox>

          {/* Right Panel */}
          <MDBox width="70%" px={1}>
            {/* Trainer Videos */}
            <MDBox display="flex" justifyContent="space-between">
              <MDTypography variant="h6" fontWeight="medium">
                New Client Form
              </MDTypography>
              <MDTypography variant="h6" fontWeight="medium">
                You have 254 clients
              </MDTypography>
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
AddNewClientPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(AddNewClientPage);
