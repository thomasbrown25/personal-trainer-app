import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "layouts/main-layout";
import { Link } from "react-router-dom";

// components
import { Grid, Card, InputAdornment } from "@mui/material";
import Header from "components/Header/header.component";
import moment from "moment";
import MDBox from "components/MDBox";
import TrainerVideo from "components/TrainerVideo/trainer-video.component";
import MDTypography from "components/MDTypography";
import WorkoutCard from "./workout-card";
import MDLink from "components/MDLink/MDLink";
import MDAvatar from "components/MDAvatar";
import UserDetail from "./user-detail";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { selectUserTrainer } from "store/user/user.selector";
import WorkoutTitle from "./workout-title";
import {
  fridayWorkouts,
  mondayWorkouts,
  thursdayWorkouts,
  tuesdayWorkouts,
  wednesdayWorkouts
} from "./workouts";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

const ClientDashboardPage = () => {
  const user = useSelector(selectCurrentUser);
  const userTrainer = useSelector(selectUserTrainer);

  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <Grid container spacing={2} className="jc-center">
        <Grid item xs={12} lg={12}>
          <Card
            sx={{
              position: "relative",
              mt: 0,
              p: 2,
              width: "100%"
            }}
          >
            <Header
              title={`Hello, ${user?.firstname}`}
              subTitle={moment().format("dddd, MMM Do").toString()}
            />

            {/* User Details */}
            <MDBox display="flex" flexDirection="column">
              <MDBox display="flex" justifyContent="center">
                <MDAvatar size="xxl" />
              </MDBox>
              <MDBox display="flex" justifyContent="center" width="100%">
                <MDBox display="flex" justifyContent="center" width="80%">
                  <Card sx={{ mt: 2, mr: 2, p: 2, width: "100%" }}>
                    <MDBox display="flex" justifyContent="center">
                      <MDTypography variant="h6" fontWeight="medium">
                        {`${user?.firstname} ${user?.lastname}`}
                      </MDTypography>
                    </MDBox>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      width="100%"
                      mt={2}
                      px={10}
                    >
                      <UserDetail title="Height" detail={user.height} />
                      <UserDetail title="Weight" detail={user.weight} />
                      <UserDetail
                        title="Weight Goal"
                        detail={user.weightGoal}
                      />
                      <UserDetail
                        title="Fitness Goal"
                        detail={user.fitnessGoals}
                      />
                      <UserDetail
                        title="Fitness Level"
                        detail={user.fitnessLevel}
                      />

                      <MDBox display="flex" mt={2}>
                        <MDTypography variant="h6" mr={1}>
                          Your Trainer:
                        </MDTypography>
                        <MDTypography variant="body2">
                          {userTrainer}
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  </Card>

                  <Card sx={{ mt: 2, ml: 2, p: 2, width: "100%" }}>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <MDTypography variant="h6" fontWeight="medium" mb={1}>
                        Have you weighed yourself today?
                      </MDTypography>
                      <MDTypography variant="h6" fontWeight="medium">
                        Enter your weight:
                      </MDTypography>
                      <MDBox mt={1}>
                        <MDInput
                          id="outlined-start-adornment"
                          placeholder={user.weight}
                          size="small"
                          label="weight"
                          focused
                          slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  kg
                                </InputAdornment>
                              )
                            }
                          }}
                        ></MDInput>
                      </MDBox>
                      <MDBox mt={2}>
                        <MDButton variant="outlined" color="info">
                          Submit
                        </MDButton>
                      </MDBox>
                    </MDBox>
                  </Card>
                </MDBox>
              </MDBox>
            </MDBox>

            {/* Things to do today */}
            {true ? (
              <>
                <MDBox display="flex" justifyContent="center" mt={6} px={2}>
                  <MDTypography variant="h4">
                    Your workout plan for the week
                  </MDTypography>
                </MDBox>

                <MDBox display="flex" justifyContent="center">
                  <MDBox
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    width="80%"
                  >
                    <WorkoutTitle weekday="Monday" link={"/"} />
                    <WorkoutCard workouts={mondayWorkouts} />

                    <WorkoutTitle weekday="Tuesday" link={"/"} />
                    <WorkoutCard workouts={tuesdayWorkouts} />

                    <WorkoutTitle weekday="Wednesday" link={"/"} />
                    <WorkoutCard workouts={wednesdayWorkouts} />

                    <WorkoutTitle weekday="Thursday" link={"/"} />
                    <WorkoutCard workouts={thursdayWorkouts} />

                    <WorkoutTitle weekday="Friday" link={"/"} />
                    <WorkoutCard workouts={fridayWorkouts} />
                  </MDBox>
                </MDBox>
              </>
            ) : (
              <MDBox display="flex" justifyContent="center">
                <MDTypography variant="h6" fontWeight="medium" p={2}>
                  No work was given by your trainer today.
                </MDTypography>
              </MDBox>
            )}
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
ClientDashboardPage.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ClientDashboardPage);
