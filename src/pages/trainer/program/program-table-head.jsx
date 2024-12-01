import MDBox from "components/MDBox";
import colors from "assets/theme-dark/base/colors";
import MDTypography from "components/MDTypography";

const { background } = colors;

const ProgramTableHead = ({ numberOfDays }) => {
  return (
    <MDBox display="flex" width="100%" justifyContent="space-between">
      {numberOfDays.map((number, index) => (
        <MDTypography
          key={index}
          display="flex"
          justifyContent="flex-start"
          width="100%"
          variant="h6"
          fontWeight="bold"
          borderRight={`1px solid ${background.border}`}
          pl={2}
        >
          {`Day ${number}`}
        </MDTypography>
      ))}
    </MDBox>
  );
};

export default ProgramTableHead;
