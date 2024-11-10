import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import MainLayout from "layouts/main-layout";

// components
import { Grid, Card } from "@mui/material";
import Header from "components/Header/header.component";
import moment from "moment";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import WorkoutCard from "./workout-card";
import MDAvatar from "components/MDAvatar";

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
import WeightCard from "./weight-card";
import UserCard from "./user-card";

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
                  <UserCard user={user} userTrainer={userTrainer} />

                  <WeightCard userWeight={user.weight} />
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
