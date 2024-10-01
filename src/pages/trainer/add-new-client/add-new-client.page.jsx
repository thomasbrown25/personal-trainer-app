import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card, Avatar, Icon } from "@mui/material";
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
import BasicInfo from "pages/trainer/components/basic-info-form/basic-info-form.component.jsx";
const { background } = colors;

const AddNewClientPage = ({ user: { currentUser, loading } }) => {
  const handleSubmit = () => {};
  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <MDTypography variant="h3">New Client Form</MDTypography>
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
          <MDBox width="100%" px={1}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              width="100%"
            >
              <Avatar
                alt="Remy Sharp"
                src={require("assets/images/default-profile-pic.png")}
                sx={{ width: "300px", height: "17rem" }}
              />
              <MDBox
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Icon fontSize="large" sx={{ cursor: "pointer" }}>
                  add_a_photo
                </Icon>
                <MDTypography variant="h5" ml={1} pt={1}>
                  Add photo
                </MDTypography>
              </MDBox>
            </MDBox>

            <BasicInfo handleSubmit={handleSubmit} />
            <MDBox display="flex" justifyContent="center" mt={5}>
              <MDBox width="300px">
                <MDButton color="success" fullWidth>
                  Save
                </MDButton>
              </MDBox>
            </MDBox>
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
