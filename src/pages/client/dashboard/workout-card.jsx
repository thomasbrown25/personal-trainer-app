import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import MDLink from "components/MDLink/MDLink";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";

const WorkoutCard = ({ workout }) => {
  const { title, workoutList, detailsLink } = workout;
  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <MDBox>
        <MDTypography variant="h5" fontWeight="medium">
          Monday
        </MDTypography>
      </MDBox>
      <MDBox display="flex" justifyContent="space-between" mt={2}>
        <MDTypography variant="h5" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        {workoutList.map((workout, index) => (
          <MDTypography key={index} variant="h6" fontWeight="medium">
            {workout}
          </MDTypography>
        ))}

        <MDLink to={detailsLink}>View Details</MDLink>
      </MDBox>
    </Card>
  );
};

export default WorkoutCard;
