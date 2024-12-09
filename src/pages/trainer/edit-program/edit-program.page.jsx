import { Grid, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MainLayout from "layouts/main-layout";
import colors from "assets/theme-dark/base/colors";
import ProgramWeek from "./program-week";

const { background } = colors;

const EditProgram = () => {
  return (
    <MainLayout expand>
      <MDBox display="flex" justifyContent="space-between" width="100%">
        <MDBox>
          <MDTypography variant="h6">Active assignments (0)</MDTypography>
        </MDBox>
        <MDBox>
          <MDButton color="info">Assign to client</MDButton>
        </MDBox>
      </MDBox>

      <MDBox
        width="100%"
        mt={5}
        p={3}
        sx={{
          border: `1px solid ${background.border}`,
          background: background.dark
        }}
      >
        <MDBox display="flex" justifyContent="space-between">
          <MDTypography variant="h4" fontWeight="bold">
            Plan Name
          </MDTypography>
          <MDButton
            variant="outlined"
            size="small"
            color="white"
            sx={{ height: "5px", minWidth: "150px" }}
          >
            <Icon sx={{ marginRight: "6px" }}>edit</Icon>
            Edit Info
          </MDButton>
        </MDBox>
        <MDBox pb={2} sx={{ borderBottom: `1px solid ${background.border}` }}>
          <MDTypography variant="h6" mt={2}>
            Description
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="h5" fontWeight="bold" my={2}>
            Workouts
          </MDTypography>
        </MDBox>

        <ProgramWeek />

        <MDBox display="flex" justifyContent="space-between">
          <MDBox display="flex" justifyContent="space-between">
            <MDButton
              variant="outlined"
              size="small"
              color="success"
              sx={{ height: "5px", minWidth: "150px", marginRight: "10px" }}
            >
              <Icon sx={{ marginRight: "6px" }}>add</Icon>
              Week
            </MDButton>
            <MDButton
              variant="outlined"
              size="small"
              color="success"
              sx={{ height: "5px", minWidth: "150px" }}
            >
              <Icon sx={{ marginRight: "6px" }}>add</Icon>
              Day
            </MDButton>
          </MDBox>
          <MDButton
            variant="outlined"
            size="small"
            color="info"
            sx={{ height: "5px", minWidth: "150px" }}
          >
            <Icon sx={{ marginRight: "6px" }}>save</Icon>
            Save
          </MDButton>
        </MDBox>
      </MDBox>
    </MainLayout>
  );
};

export default EditProgram;
