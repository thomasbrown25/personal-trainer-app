import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ProgramTableHead from "./program-table-head";
import ProgramWorkout from "./program-workout";

import colors from "assets/theme-dark/base/colors";

const { background } = colors;

const ProgramTable = ({ program }) => {
  const { plans } = program;

  const renderTable = () => {
    let j = 0;
    let k = 1;
    let data = [];
    for (let i = 0; i <= plans.length; i++) {
      if (plans.length > i) {
        i += 7;

        data.push(
          <>
            <MDTypography variant="h6" fontWeight="bold" color="success" mb={1}>
              Week {k++}
            </MDTypography>
            <MDBox sx={{ border: `1px solid ${background.border}` }} mb={5}>
              <MDBox display="flex" width="100%" justifyContent="space-between">
                {Array.from({ length: 7 }).map((_, index) => (
                  <ProgramWorkout key={index} workout={plans[index + j]} />
                ))}
              </MDBox>
            </MDBox>
          </>
        );
        j += 7;
      }
    }
    return data;
  };

  return <MDBox width="100%">{renderTable()}</MDBox>;
};

export default ProgramTable;
