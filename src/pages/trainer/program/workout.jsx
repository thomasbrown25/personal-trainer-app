import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Workout = () => {
  return (
    <MDBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      pb={2}
    >
      <MDTypography my={2}>Workout for Today</MDTypography>
      <MDTypography>Upper Body</MDTypography>
      <MDTypography variant="h6">4x8 Bench Press</MDTypography>
      <MDTypography variant="h6">4x10 Dumbbell curls</MDTypography>
      <MDTypography variant="h6">4x15 Tricep dips</MDTypography>
      <MDTypography mt={2}>Back</MDTypography>
      <MDTypography variant="h6"> 4x8 Deadlifts</MDTypography>
      <MDTypography variant="h6"> 4x10 Pullups</MDTypography>
      <MDTypography variant="h6"> 4x15 Rows</MDTypography>
      <MDTypography mt={2}>Core</MDTypography>
      <MDTypography variant="h6"> 4x8 Leg raises</MDTypography>
      <MDTypography variant="h6"> 4x10 Russian twists</MDTypography>
      <MDTypography variant="h6"> 2x60(secs) Planks</MDTypography>
    </MDBox>
  );
};

export default Workout;
