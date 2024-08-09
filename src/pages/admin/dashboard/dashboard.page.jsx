import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";

// Mui components
import { Grid, Card } from "@mui/material";

// components
import Header from "components/Header/header.component";
import Footer from "layouts/footer";

// Mui typography
import MDTypography from "components/MDTypography";

// actions
import moment from "moment";
import MDBox from "components/MDBox";
import TrainerVideo from "components/TrainerVideo/trainer-video.component";

const AdminDashboardPage = ({ user: { currentUser, loading } }) => {
  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <Grid container spacing={2} className="jc-center">
        <Grid item xs={12} lg={12}>
          <Card
            sx={{
              position: "relative",
              mt: 0,
              px: 2
            }}
          >
            <Header
              title="Things to do today"
              subTitle={moment().format("dddd, MMM Do").toString()}
            />

            {/* Things to do today */}
            {true ? (
              <>
                <TrainerVideo
                  title={"Trainer video 1"}
                  url={"https://www.youtube.com/watch?v=iCQ2gC4DqJw"}
                />
                <TrainerVideo
                  title={"Trainer video 2"}
                  url={"https://www.youtube.com/watch?v=M0uO8X3_tEA"}
                />
              </>
            ) : (
              <Grid item xs={12} sm={12} md={12}>
                <MDBox display="flex" justifyContent="center">
                  <MDTypography variant="h6" fontWeight="medium" p={2}>
                    Nothing scheduled
                  </MDTypography>
                </MDBox>
              </Grid>
            )}
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </MainLayout>
  );
};
AdminDashboardPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(AdminDashboardPage);
