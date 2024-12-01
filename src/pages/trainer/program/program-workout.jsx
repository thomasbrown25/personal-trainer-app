import MDBox from "components/MDBox";
import colors from "assets/theme-dark/base/colors";
import MDTypography from "components/MDTypography";
import { Divider } from "@mui/material";

const { background } = colors;

const ProgramWorkout = ({ workout }) => {
  return (
    <MDBox
      display="flex"
      width="100%"
      flexDirection="column"
      pb={1}
      sx={{ borderRight: `1px solid ${background.border}` }}
    >
      <MDBox
        pl={2}
        sx={{
          borderBottom: `1px solid ${background.border}`
        }}
      >
        <MDTypography variant="h6" fontWeight="bold" color="info">
          {workout?.day}
        </MDTypography>
      </MDBox>
      <MDBox
        pl={2}
        mb={1}
        sx={{
          borderBottom: `1px solid ${background.border}`
        }}
      >
        <MDTypography variant="h6" fontWeight="bold">
          {workout?.type}
        </MDTypography>
      </MDBox>
      <MDTypography variant="h6" fontWeight="bold" pl={2} color="success">
        {workout?.focus}
      </MDTypography>

      {workout?.exercises?.map((excercise, index) => (
        <>
          <MDBox
            key={index}
            display="flex"
            width="100%"
            flexDirection="column"
            pr={1}
            pl={2}
            pb={-1}
          >
            <MDTypography variant="h6" fontWeight="bold">
              {excercise.name}
            </MDTypography>
            <MDTypography variant="h7" fontWeight="bold">
              {excercise.sets}
              {excercise.sets && "x"}
              {excercise.reps}
            </MDTypography>
          </MDBox>
          {index !== workout?.exercises.length - 1 && (
            <Divider sx={{ height: "0.0725rem" }} />
          )}
        </>
      ))}
    </MDBox>
  );
};

export default ProgramWorkout;
