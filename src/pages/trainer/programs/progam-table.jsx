import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const ProgamTable = ({ programs }) => {
  return (
    <MDBox
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        width: "100%"
      }}
    >
      {/* Table header */}
      <MDBox
        display="flex"
        p={2}
        sx={{
          background: background.grey,
          border: `1px solid ${background.border}`,
          borderRadius: "5px"
        }}
      >
        <MDBox flex={1}>
          <MDTypography variant="h6" fontWeight="bold">
            Name
          </MDTypography>
        </MDBox>
        <MDBox flex={1}>
          <MDTypography variant="h6" fontWeight="bold">
            Active
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="h6" fontWeight="bold">
            Days
          </MDTypography>
        </MDBox>
      </MDBox>

      {/* Table rows */}
      {programs.map((row, index) => (
        <MDBox key={index} display="flex">
          <MDBox flex={1}>
            <MDBox>
              <MDTypography variant="h6" fontWeight="bold">
                {row.name}
              </MDTypography>
              <MDTypography variant="h6">{row.description}</MDTypography>
            </MDBox>
          </MDBox>
          <MDBox flex={1}>
            <MDTypography variant="h6"> {row.active} clients</MDTypography>
          </MDBox>
          <MDBox>
            <MDBox sx={{ position: "relative", minHeight: "30px" }}>
              <MDTypography
                variant="h6"
                position="absolute"
                sx={{ top: 11, left: 10 }}
              >
                {row.days}
              </MDTypography>
              <CalendarTodayOutlinedIcon fontSize="large" />
            </MDBox>
          </MDBox>
        </MDBox>
      ))}
    </MDBox>
  );
};

export default ProgamTable;
