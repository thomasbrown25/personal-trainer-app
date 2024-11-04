import MDBox from "components/MDBox";
import MDLink from "components/MDLink/MDLink";
import MDTypography from "components/MDTypography";

const WorkoutTitle = ({ weekday, link }) => {
  return (
    <MDBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={6}
    >
      <MDTypography variant="h5" fontWeight="medium">
        {weekday}
      </MDTypography>
      <MDLink to={link}>View Plan</MDLink>
    </MDBox>
  );
};

export default WorkoutTitle;
