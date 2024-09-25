import { Link } from "react-router-dom";

import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/favicon.png";
import team2 from "assets/images/favicon.png";
import team3 from "assets/images/favicon.png";
import team4 from "assets/images/favicon.png";
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
          to="/trainer-manage-workouts"
        >
          Manage your workout plans
        </MDTypography>
      </MDBox>
      <MDBox display="flex">
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
      </MDBox>
    </MDBox>
  );
};

export default WorkoutPreview;
