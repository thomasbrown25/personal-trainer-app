import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

// components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// actions
import moment from "moment";
import Image from "components/Image/image.component";

// css
import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const renderRow = () => {
  const { index, style } = ListChildComponentProps;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
};

const ClientManagementPage = ({ user: { currentUser, loading } }) => {
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
            {/* Client List */}
            <Grid container spacing={2} className="jc-center">
              Client list
              <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </MainLayout>
  );
};
ClientManagementPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(ClientManagementPage);
