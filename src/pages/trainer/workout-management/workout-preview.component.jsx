import { Link } from "react-router-dom";

import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import WorkoutVideoCard from "./workout-video-card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const WorkoutPreview = () => {
  return (
    <MDBox mb={8}>
      <MDBox
        pt={2}
        mb={2}
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <MDTypography variant="h5" fontWeight="medium">
          Workout Plans
        </MDTypography>
        <MDTypography
          variant="button"
          color="info"
          component={Link}
          to="/trainer/workout-management"
          sx={{ "&:hover": { textDecoration: "underline !important" } }}
        >
          Manage your plans
        </MDTypography>
      </MDBox>
      <MDBox display="flex">
        <WorkoutVideoCard
          image={homeDecor1}
          title="Upper Body"
          description="Focuses on the muscles in your arms, shoulders, chest, back, and abs."
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "view plan"
          }}
        />
        <WorkoutVideoCard
          image={homeDecor2}
          title="Lower Body"
          description="Build strength and speed in the lower back, hips, glutes, and legs."
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "view plan"
          }}
        />
        <WorkoutVideoCard
          image={homeDecor3}
          title="Core"
          description="The Core plan improves your balance, stability, and help you maintain good posture."
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "view plan"
          }}
        />
        <WorkoutVideoCard
          image={homeDecor3}
          title="Cardio"
          description="Increases the heart rate and strengthens the heart, blood vessels, bones, muscles, and joints."
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "view plan"
          }}
        />
      </MDBox>
    </MDBox>
  );
};

export default WorkoutPreview;
