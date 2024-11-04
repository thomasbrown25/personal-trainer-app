import { useState } from "react";
import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

const WorkoutCard = ({ workouts }) => {
  const [completed, setCompleted] = useState(false);
  const handleOnComplete = () => {
    setCompleted(!completed);
  };

  return (
    <Card sx={{ mt: 2, p: 2, width: "100%" }}>
      <MDBox display="flex" justifyContent="flex-end" width="100%">
        <MDButton
          variant={completed ? "contained" : "outlined"}
          color={completed ? "success" : "info"}
          onClick={handleOnComplete}
        >
          {completed ? "Completed" : "Complete"}
        </MDButton>
      </MDBox>
      <MDBox display="flex" justifyContent="flex-start">
        {workouts?.map((workout, index) => (
          <MDBox key={index} mr={index !== 2 ? "22%" : 0}>
            <MDTypography variant="h5" fontWeight="medium">
              {workout.title}
            </MDTypography>
            {workout.workoutList?.map((workout, i) => (
              <MDTypography key={i} variant="h6" fontWeight="regular">
                {workout}
              </MDTypography>
            ))}
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
};

export default WorkoutCard;
