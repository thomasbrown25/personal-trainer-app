import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import colors from "assets/theme-dark/base/colors";
import { Grid } from "@mui/material";
const { background } = colors;

const ClientCard = () => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <MDBox
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={3}
        borderRadius={5}
        boxShadow={3}
        border={`1px solid ${background.border}`}
      >
        <MDBox display="flex" alignItems="center">
          <MDBox>
            <MDTypography variant="h6" fontWeight="medium">
              John Doe
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Grid>
  );
};

export default ClientCard;
