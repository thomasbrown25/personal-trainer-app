import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Tooltip from "@mui/material/Tooltip";

import colors from "assets/theme-dark/base/colors";
import { Icon } from "@mui/material";

const { background } = colors;

const ProgramWeek = () => {
  let program = [
    {
      week: "Week 1",
      days: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      dayCount: 7,
      exercises: [
        {
          day: "Day 1",
          name: "Squat",
          sets: 3,
          reps: 10,
          weight: 100
        },
        {
          day: "Day 1",
          name: "Bench Press",
          sets: 3,
          reps: 10,
          weight: 100
        },
        {
          day: "Day 1",
          name: "Deadlift",
          sets: 3,
          reps: 10,
          weight: 100
        }
      ]
    },
    {
      week: "Week 2",
      days: ["Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
      dayCount: 7,
      exercises: [
        {
          day: "Day 1",
          name: "Squat",
          sets: 3,
          reps: 10,
          weight: 100
        },
        {
          day: "Day 1",
          name: "Bench Press",
          sets: 3,
          reps: 10,
          weight: 100
        },
        {
          day: "Day 1",
          name: "Deadlift",
          sets: 3,
          reps: 10,
          weight: 100
        }
      ]
    }
  ];

  return (
    <>
      {program.map((program, index) => (
        <>
          <MDTypography variant="h6" fontWeight="bold" color="success" mb={1}>
            {program.week}
          </MDTypography>
          <MDBox sx={{ minHeight: "" }} mb={5} width="100%">
            <MDBox key={index} display="flex" flexDirection="column">
              <MDBox display="flex">
                {program.days.map((day, index) => (
                  <MDBox
                    key={index}
                    flexGrow={1}
                    sx={{
                      maxWidth: "14.2857%",
                      borderTop: `1px solid ${background.border}`
                    }}
                  >
                    <MDTypography
                      variant="h6"
                      fontWeight="bold"
                      borderRight={`1px solid ${background.border}`}
                      borderBottom={`1px solid ${background.border}`}
                      borderLeft={`1px solid ${background.border}`}
                      pl={2}
                      minHeight="150px"
                    >
                      {day}
                      <MDBox
                        sx={{
                          width: "100px",
                          margin: "auto"
                        }}
                      >
                        <Tooltip title="Add Exercise">
                          <Icon
                            fontSize="medium"
                            sx={{
                              transition: "all 0.2s",
                              marginRight: "5px",
                              ":hover": {
                                cursor: "pointer",
                                background: background.secondary,
                                fontSize: "28px"
                              }
                            }}
                          >
                            add
                          </Icon>
                        </Tooltip>
                        <Tooltip title="Copy Day">
                          <Icon
                            fontSize="medium"
                            sx={{
                              transition: "all 0.2s",
                              ":hover": {
                                cursor: "pointer",
                                background: background.secondary,
                                fontSize: "28px"
                              }
                            }}
                          >
                            copy
                          </Icon>
                        </Tooltip>
                      </MDBox>
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
            </MDBox>
          </MDBox>
        </>
      ))}
    </>
  );
};

export default ProgramWeek;
