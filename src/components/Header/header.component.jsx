import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Header = ({ title, subTitle }) => {
  return (
    <Grid item xs={12} xl={12}>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={3}
        px={2}
      >
        <MDTypography variant="h4" fontWeight="medium">
          {title}
        </MDTypography>
        {subTitle && (
          <MDTypography variant="h6" fontWeight="medium" py={2}>
            {subTitle}
          </MDTypography>
        )}
      </MDBox>
    </Grid>
  );
};
Header.propTypes = {};

export default Header;
