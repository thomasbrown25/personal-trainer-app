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
import FormField from "../components/basic-info-form/form-field.component";
const { background } = colors;

const AddNewClientPage = ({ user: { currentUser, loading } }) => {
  const handleSubmit = () => {};
  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <MDTypography variant="h3">New Client Form</MDTypography>
      <MDTypography variant="h5" mt={5} pt={1} sx={{ textAlign: "center" }}>
        Add a user or send them the invite link and they can sign up themselves.
      </MDTypography>

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
          <Card id="basic-info" sx={{ overflow: "visible", width: "100%" }}>
            <MDBox p={3}>
              <MDTypography variant="h5">Send invite</MDTypography>
            </MDBox>
            <MDBox component="form" pb={3} px={3}>
              <FormField
                label="Email"
                placeholder="example@email.com"
                inputProps={{ type: "email" }}
              />
            </MDBox>
            <MDBox display="flex" justifyContent="center" mb={3}>
              <MDBox width="300px">
                <MDButton color="success" fullWidth>
                  Send Invite
                </MDButton>
              </MDBox>
            </MDBox>
          </Card>

          <MDBox width="100%">
            <BasicInfo handleSubmit={handleSubmit} />
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
