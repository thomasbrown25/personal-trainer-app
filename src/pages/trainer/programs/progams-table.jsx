import { useNavigate } from "react-router-dom";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const ProgamsTable = ({ programs }) => {
  const navigate = useNavigate();
  const handleSelect = (id) => {
    navigate(`/trainer/programs/${id}`);
  };
  return (
    <MDBox
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        width: "100%",
        border: `1px solid ${background.border}`,
        borderRadius: "10px"
      }}
    >
      {/* Table header */}
      <MDBox
        display="flex"
        p={2}
        sx={{
          background: background.grey,
          borderBottom: `1px solid ${background.border}`
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
        <MDBox
          key={index}
          display="flex"
          alignItems="center"
          px={2}
          py={3}
          onClick={() => handleSelect(row.id)}
          sx={{
            borderBottom:
              index === programs.length - 1
                ? ""
                : `1px solid ${background.border}`,
            background: background.dark,
            "&:hover": {
              background: background.grey,
              cursor: "pointer"
            }
          }}
        >
          <MDBox flex={1}>
            <MDBox pr={5}>
              <MDTypography variant="h6" fontWeight="bold" color="info">
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
                sx={
                  isSingleDigit(row.days)
                    ? { top: 10.5, left: 13 }
                    : { top: 10.5, left: 9 }
                }
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

function isSingleDigit(number) {
  return number >= 0 && number <= 9;
}

export default ProgamsTable;
